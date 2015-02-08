/* Function: ownsDocument, allows the user to alter a document only if it owns it, by
 * matching the owner of the document to the current user's id.
 */
ownsDocument = function (userId, doc) {
  return doc && doc.userId === userId;
};