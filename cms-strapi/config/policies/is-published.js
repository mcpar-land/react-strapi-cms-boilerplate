'use strict';

/**
 * `isPublished` policy.
 */

module.exports = async (ctx, next) => {
  // Add your own logic here.
  console.log('In isPublished policy.');

  await next();
};
