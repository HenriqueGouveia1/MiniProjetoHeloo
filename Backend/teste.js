Executing(default ): INSERT INTO`posts`(`id`, `desc`, `valor`, `createdAt`, `updatedAt`) VALUES(DEFAULT,?,?,?,?);
(node: 7304) UnhandledPromiseRejectionWarning: SequelizeDatabaseError: Table 'helooproject.posts' doesn't exist
at Query.formatError(C: \MiniProjetoHeloo\Backend\node_modules\sequelize\lib\dialects\mysql\query.js: 265: 16)
at Query.run(C: \MiniProjetoHeloo\Backend\node_modules\sequelize\lib\dialects\mysql\query.js: 77: 18)
at processTicksAndRejections(internal / process / task_queues.js: 93: 5)
at async C: \MiniProjetoHeloo\Backend\node_modules\sequelize\lib\sequelize.js: 619: 16
at async MySQLQueryInterface.insert(C: \MiniProjetoHeloo\Backend\node_modules\sequelize\lib\dialects\abstract\query - interface.js: 749: 21)
at async model.save(C: \MiniProjetoHeloo\Backend\node_modules\sequelize\lib\model.js: 3954: 35)
at async Function.create(C: \MiniProjetoHeloo\Backend\node_modules\sequelize\lib\model.js: 2207: 12)
    (Use`node --trace-warnings ...` to show where the warning was created)
    (node: 7304) UnhandledPromiseRejectionWarning: Unhandled promise rejection.This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch().To terminate the node process on unhandled promise rejection, use the CLI flag`--unhandled-rejections=strict`(see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
        (node: 7304) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated.In the future, promise rejections that are not handled will terminate the Node.js process with a non - zero exit code.