import crypto from "crypto"

/**
 * @param secret the secret to generate the OTP with
 * @param length the desired OTP length
 * @param id unique ID to generate OTP for
 * @param ttl time to live of the OTP in seconds. The same OTP will be generated for the same ID if ttl has not elapsed
 * @returns otp
 */
 export function totp(secret: string, length: number, id: string, ttl: number) {
    const timestamp = Math.floor(Date.now() / (ttl * 1000)).toString();
    const hex = crypto.createHmac("sha256", secret).update(Buffer.from(id)).update(timestamp).digest("hex");
    const int = parseInt(hex, 36);
    const otp = int.toString().replace(/\D/g, "").substring(0, length);
  
    return otp;
  }