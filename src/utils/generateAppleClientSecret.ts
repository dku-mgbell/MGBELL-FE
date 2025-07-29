import jwt from 'jsonwebtoken';

export function generateAppleClientSecret() {
  const teamId = process.env.APPLE_TEAM_ID!;
  const clientId = process.env.APPLE_CLIENT_ID!;
  const keyId = process.env.APPLE_KEY_ID!;
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: teamId,
    iat: now,
    exp: now + 60 * 60 * 24 * 180, // 180일
    aud: 'https://appleid.apple.com',
    sub: clientId,
  };

  const privateKey = process.env.APPLE_PRIVATE_KEY!.replace(/\\n/g, '\n');

  const token = jwt.sign(payload, privateKey, {
    algorithm: 'ES256',
    keyid: keyId,
  });

  return { teamId, clientId, keyId, token, privateKey };
}
