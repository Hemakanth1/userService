import boom from '@hapi/boom';
import winston from 'winston';
import rateLimit from 'express-rate-limit';

// // @hapi/boom 
// const errorObj = boom.notFound('Resource not found');

//winston 
// const logger = winston.createLogger({
//     level: 'info',
//     format: winston.format.simple(),
//     transports: [
//         new winston.transports.Console()
//     ]
// })

// logger.info('this is info message');
// logger.warn('this is a warning message');
// logger.error('this is an error message');

const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 3,
    message: 'Too many requests'
});

export default limiter;