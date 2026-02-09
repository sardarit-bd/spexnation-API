import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.route.js";
import { UploadRoutes } from "../modules/upload/upload.routes.js";

import { UsersRoutes } from "../modules/users/users.route.js";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export const router = Router()

const moduleRoutes = [
    {
        path: '/auth',
        route: AuthRoutes
    },
   
    {
        path: '/upload',
        route: UploadRoutes
    },
    {
        path: '/users',
        route: UsersRoutes
    }
]

moduleRoutes.forEach(route => {
    router.use(route.path, route.route)
})