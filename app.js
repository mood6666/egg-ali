
const LocalStrategy = require('passport-local').Strategy;

module.exports = (app) => {
    // console.log(Object.keys(app.passport))
    // console.log(app.verify)
    const config = app.config.passportLocal;
    app.passport.verify(async (ctx, user) => {
        console.log('=======', user)
        ctx.logger.debug('passport.verify', user);
        // const result = await ctx.service.user.find({ username: user.username, password: user.password });
        // console.log('passport.verify', result);
        // console.log('==========', user)
        // if (result.length > 0) {
        //     return result[0];
        // }
        return true;
    });

    // console.log(app.passport.doVerify)
    app.passport.use(
        new LocalStrategy(config, (req, username, password, done) => {

            console.log('===============', req)
            // 把 Passport 插件返回的数据进行清洗处理，返回 User 对象
            const user = {
                provider: 'local',
                username,
                password,
            };
            // 这里不处理应用层逻辑，传给 app.passport.verify 统一处理
            console.log('doVerify', done);
            app.passport.doVerify(req, user, done);
        }),
    );
}