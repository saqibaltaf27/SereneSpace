export const sanitizeInput = (value) => {
    const cleaned = value.replace(/[^0-9]/g, '');
    if (cleaned === '') return '';
    const num = parseInt(cleaned, 10);
    return String(Math.min(num, 30)); // Max 30 seconds
};

export const toValidNumber = (value, fallback = 4) => {
    const num = parseInt(value, 10);
    if (isNaN(num) || num <= 0) return fallback;
    return Math.min(num, 30); // Cap at 30 seconds
};