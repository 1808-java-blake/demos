
export function authMiddleware(...roles: string[]) {
  return (req, resp, next) => {
    const user = req.session.user;
    if (!user) {
      resp.sendStatus(401);
      return;
    }
    const hasPermission = roles.some(role => {
      if (user.role === role) {
        return true;
      } else {
        return false;
      }
    })
    if (hasPermission) {
      next();
    } else {
      resp.sendStatus(403);
    }
  }
}