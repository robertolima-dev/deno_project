import { UserController } from './user_controller.ts'
import { ProfileController } from './profile_controller.ts'
import { CustomerController } from './customer_controller.ts'
import { AdminController } from './admin_controller.ts'

export var urls = [
    { reg: '^/user/\\d+', controller: new UserController() },
    { reg: '^/profile/\\d+', controller: new ProfileController() },
    { reg: '^/customer/\\d+', controller: new CustomerController() },

    { reg: '^/admin', controller: new AdminController() },
]