import crypto from 'crypto';

function generateETag(content: string): string {
  return crypto.createHash('md5').update(content).digest('hex');
}
export {
  generateETag
}