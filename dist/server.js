"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config/config");
const user_router_1 = require("./user/user.router");
const customer_router_1 = require("./customer/customer.router");
const category_router_1 = require("./category/category.router");
class ServerBootstrap extends config_1.ConfigServer {
    constructor() {
        super();
        this.app = (0, express_1.default)();
        this.port = this.getNumberEnv('PORT') || 8000;
        this.app.disable('x-powered-by');
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        // Start to Database
        this.dbConnect();
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        // Routes
        this.app.use('/api', this.routers());
        this.listen();
    }
    routers() {
        return [
            new user_router_1.UserRouter().router,
            new customer_router_1.CustomerRouter().router,
            new category_router_1.CategoryRouter().router
        ];
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port: ${this.port}`);
        });
    }
}
new ServerBootstrap();
//# sourceMappingURL=server.js.map