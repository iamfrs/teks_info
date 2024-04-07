import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const tokenKey = "EmSpNpS1D#LEe4x7*L0MBU4nkQFS@9MwGlwAZa6zQ*eujxbBMFpfiY";
//─────────────────────────────── oms ───────────────────────────────
export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

export const comparePassword = async (
  password: string,
  hashedPassword: string,
): Promise<boolean> => {
  const match = await bcrypt.compare(password, hashedPassword);
  return match;
};
//─────────────────────────────── oms ───────────────────────────────
interface tokenResponse {
  error: boolean;
  value: any;
}
//─────────────────────────────── oms ───────────────────────────────

export const otpValue: () => number = () => {
  return Math.floor(1000 + Math.random() * 9000);
};

//─────────────────────────────── oms ───────────────────────────────

export const otpToken = (params: any): string => {
  let key = jwt.sign(
    {
      data: params,
    },
    tokenKey,
    { expiresIn: 60 * 5 },
  );
  return key;
};
//─────────────────────────────── oms ───────────────────────────────
interface tokenResponse {
  error: boolean;
  value: any;
}

export const tokenDecode = (token: string): tokenResponse => {
  try {
    let decoded = jwt.verify(token, tokenKey);
    return { error: false, value: decoded };
  } catch (err) {
    return { error: true, value: err };
  }
};

export const tokenEncode = (params: any): string => {
  let key = jwt.sign(
    {
      data: params,
    },
    tokenKey,
  );
  return key;
};
