# JavaScript library for generating OTP

## How to use

```bash
yarn add otp-ts
```

```typescript
import { totp } from "otp-ts";

const secret = "secret";
const otpLength = 6;
const id = "email@example.com";
const ttl = 300; // seconds

const otp = totp(secret,  otpLength, id, ttl);
console.log(otp);
```