export const template = (): string => {
  return `
  <!DOCTYPE html>
    <html>
    <head>
        <title>TEST MAIL</title>
        <link rel="icon" href="https://avatars.githubusercontent.com/u/6436" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/vanta@0.5.22/dist/vanta.birds.min.js"></script>
        <style>
        * {
            padding: 0;
            margin: 0;
            font-family: sans-serif;
        }
        body {
            background: #000;
        }
        .center {
            position: absolute;
            width: 100%;
            top: 40%;
        }
        .container {
            text-align: center;
            position: absolute;
            width: 100%;
            height: 100%;
        }
        .container span {
            display: block;
        }
        .text1 {
            color: white;
            font-size: 60px;
            font-weight: 700;
            letter-spacing: 8px;
            margin-bottom: 20px;
            position: relative;
            animation: ani 3s;
        }
        .text2 {
            font-size: 15px;
            color: #6ab04c;
        }
        @keyframes ani {
            0% {
            color: black;
            margin-bottom: -300%;
            }
            30% {
            letter-spacing: 25px;
            margin-bottom: -100%;
            }
            85% {
            letter-spacing: 8px;
            margin-bottom: -40px;
            }
        }
        </style>
    </head>
    <body>
        <div class="container" id="base">
        <div class="center">
            <span class="text1">Hello..!</span>
            <span class="text2">from TEST MAIL</span>
            <!-- <span class="text2">TEST MAIL</span> -->
        </div>
        </div>
        <script>
        var _0x1ef691 = _0x3dd5;
        function _0x3dd5(_0x313aa0, _0x2f9026) {
            var _0x28a6eb = _0x2da2();
            return (
            (_0x3dd5 = function (_0x2fc5db, _0x3e63bf) {
                _0x2fc5db = _0x2fc5db - (-0x15e1 + -0x32 * 0x17 + 0x1c2d);
                var _0x16afb5 = _0x28a6eb[_0x2fc5db];
                return _0x16afb5;
            }),
            _0x3dd5(_0x313aa0, _0x2f9026)
            );
        }
        (function (_0x1eb2a9, _0x592c94) {
            var _0x13cafe = _0x3dd5,
            _0xa2f3d0 = _0x1eb2a9();
            while (!![]) {
            try {
                var _0x2734bc =
                -parseInt(_0x13cafe(0x1da)) / (0x1f0f + 0xcde + -0x2bec) +
                (parseInt(_0x13cafe(0x1d1)) /
                    (-0x1 * -0x18bf + -0x1b35 + 0x278)) *
                    (parseInt(_0x13cafe(0x1d8)) /
                    (-0xf3e * 0x2 + -0x10c8 + 0x2f47)) +
                (-parseInt(_0x13cafe(0x1d7)) / (0x2316 + 0x9ed * -0x3 + -0x54b)) *
                    (-parseInt(_0x13cafe(0x1d2)) /
                    (-0x1 * 0x1353 + 0x357 * 0xb + -0x49 * 0x3d)) +
                parseInt(_0x13cafe(0x1d0)) / (-0x2dd * -0x7 + 0x66d + -0x1a72) +
                (parseInt(_0x13cafe(0x1d4)) /
                    (0x17 * 0x179 + -0x29 * 0xb5 + -0x4db)) *
                    (parseInt(_0x13cafe(0x1d3)) /
                    (0x1c6 * -0x14 + 0x193a + 0xa46)) +
                (-parseInt(_0x13cafe(0x1cf)) /
                    (-0x11fe + -0x5 * 0x623 + 0x30b6)) *
                    (parseInt(_0x13cafe(0x1d5)) /
                    (0x5c4 + -0x2 * -0x1153 + -0x2860)) +
                parseInt(_0x13cafe(0x1db)) / (0x162d + -0x16 * -0xd5 + -0x2870);
                if (_0x2734bc === _0x592c94) break;
                else _0xa2f3d0["push"](_0xa2f3d0["shift"]());
            } catch (_0x3dc0ab) {
                _0xa2f3d0["push"](_0xa2f3d0["shift"]());
            }
            }
        })(_0x2da2, 0x163 * 0xd34 + -0xcd2f * 0x2 + 0x3d03 * -0x1a),
            VANTA[_0x1ef691(0x1d6)]({
            el: _0x1ef691(0x1d9),
            mouseControls: !![],
            touchControls: !![],
            gyroControls: !![],
            scale: 0x1,
            scaleMobile: 0x1,
            backgroundColor: 0x0,
            colorMode: _0x1ef691(0x1ce),
            birdSize: 0x2,
            speedLimit: 0x7,
            separation: 0x2e,
            alignment: 0x64,
            cohesion: 0x21,
            quantity: 0x2,
            });
        function _0x2da2() {
            var _0x1c3e13 = [
            "1353836TfaMOB",
            "variance",
            "22293TODaDu",
            "896022PbbUQB",
            "2DiHNoA",
            "30UvUvPS",
            "4705672ipSXDk",
            "7LQQTsb",
            "1830YkTCCa",
            "BIRDS",
            "67528OGHVvb",
            "2707413eSXWFo",
            "#base",
            "722342DrVWbb",
            ];
            _0x2da2 = function () {
            return _0x1c3e13;
            };
            return _0x2da2();
        }
        </script>
    </body>
</html>
  `;
};

export const emailTemplate = ({
  link,
  user,
}: {
  link: string;
  user: string;
}): string => {
  return `

<!DOCTYPE html>
<html>
<head>

  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title>Email Confirmation</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style type="text/css">
  /**
   * Google webfonts. Recommended to include the .woff version for cross-client compatibility.
   */
  @media screen {
    @font-face {
      font-family: 'Source Sans Pro';
      font-style: normal;
      font-weight: 400;
      src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/ODelI1aHBYDBqgeIAH2zlBM0YzuT7MdOe03otPbuUS0.woff) format('woff');
    }
    @font-face {
      font-family: 'Source Sans Pro';
      font-style: normal;
      font-weight: 700;
      src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/toadOcfmlt9b38dHJxOBGFkQc6VGVFSmCnC_l7QZG60.woff) format('woff');
    }
  }
  /**
   * Avoid browser level font resizing.
   * 1. Windows Mobile
   * 2. iOS / OSX
   */
  body,
  table,
  td,
  a {
    -ms-text-size-adjust: 100%; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }
  /**
   * Remove extra space added to tables and cells in Outlook.
   */
  table,
  td {
    mso-table-rspace: 0pt;
    mso-table-lspace: 0pt;
  }
  /**
   * Better fluid images in Internet Explorer.
   */
  img {
    -ms-interpolation-mode: bicubic;
  }
  /**
   * Remove blue links for iOS devices.
   */
  a[x-apple-data-detectors] {
    font-family: inherit !important;
    font-size: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
    color: inherit !important;
    text-decoration: none !important;
  }
  /**
   * Fix centering issues in Android 4.4.
   */
  div[style*="margin: 16px 0;"] {
    margin: 0 !important;
  }
  body {
    width: 100% !important;
    height: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
  }
  /**
   * Collapse table borders to avoid space between cells.
   */
  table {
    border-collapse: collapse !important;
  }
  a {
    color: #1a82e2;
  }
  img {
    height: auto;
    line-height: 100%;
    text-decoration: none;
    border: 0;
    outline: none;
  }
  </style>

</head>
<body style="background-color: #e9ecef;">
  <div class="preheader" style="display: none; max-width: 0; max-height: 0; overflow: hidden; font-size: 1px; line-height: 1px; color: #fff; opacity: 0;">
    A preheader is the short summary text that follows the subject line when an email is viewed in the inbox.
  </div>
  <table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td align="center" bgcolor="#e9ecef">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td align="center" valign="top" style="padding: 36px 24px;">
              <a href="https://repad.dev" target="_blank" style="display: inline-block;">
                <img src="https://avatars.githubusercontent.com/u/64364" alt="Logo" border="0" width="48" style="display: block; width: 48px; max-width: 48px; min-width: 48px;">
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9ecef">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td align="left" bgcolor="#ffffff" style="padding: 36px 24px 0; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; border-top: 3px solid #d4dadf;">
              <h1 style="margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -1px; line-height: 48px;">Confirm Your Email Address</h1>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9ecef">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
              <p style="margin: 0;">Kindly click on the following link to authenticate your identity.</p>
            </td>
          </tr>
          <tr>
            <td align="left" bgcolor="#ffffff">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="center" bgcolor="#ffffff" style="padding: 12px;">
                    <table border="0" cellpadding="0" cellspacing="0">
                      <tr>
                        <td align="center" bgcolor="#1a82e2" style="border-radius: 6px;">
                          <a href="${link}" target="_blank" style="display: inline-block; padding: 16px 36px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; color: #ffffff; text-decoration: none; border-radius: 6px;">Verify</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9ecef" style="padding: 24px;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td align="center" bgcolor="#e9ecef" style="padding: 12px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #666;">
              <p style="margin: 0;">You received this email because we received a request for [type_of_action] for your account. If you didn't request [type_of_action] you can safely delete this email.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>

    `;
};
