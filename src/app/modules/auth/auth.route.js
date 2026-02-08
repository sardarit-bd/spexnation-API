import { Router } from "express";
import { AuthControllers } from "./auth.controller.js";
import { checkAuth } from "../../middlewares/checkAuth.js";
import { Role } from "./auth.model.js";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const router = Router();

router.post("/register", AuthControllers.createUser);
router.get('/me', checkAuth(Role.ADMIN, Role.SUPER_ADMIN, Role.CUSTOMER, Role.STUFF), AuthControllers.getMe)
router.delete('/delete-me', checkAuth(Role.ADMIN, Role.SUPER_ADMIN, Role.CUSTOMER, Role.STUFF), AuthControllers.deleteMe)

router.post("/login", AuthControllers.credentialsLogin);
router.post("/logout", AuthControllers.logout);

router.post("/change-password", checkAuth( Role.ADMIN, Role.SUPER_ADMIN, Role.CUSTOMER, Role.STUFF), AuthControllers.changePassword);
router.post("/forgot-password", AuthControllers.forgotPassword);
router.post("/reset-password", checkAuth(Role.ADMIN, Role.SUPER_ADMIN, Role.ADMIN, Role.SUPER_ADMIN, Role.CUSTOMER, Role.STUFF), AuthControllers.resetPassword);

router.post("/send-verify-code", checkAuth(Role.CUSTOMER), AuthControllers.sendVerifyCode);
router.post("/verify-code", checkAuth(Role.CUSTOMER), AuthControllers.verifyCode);
 
export const AuthRoutes = router;