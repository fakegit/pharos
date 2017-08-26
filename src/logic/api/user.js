module.exports = class extends think.Logic {
  /**
   * @api {POST} /user 用户注册
   * @apiGroup User
   * @apiVersion 0.0.1
   * 
   * @apiParam  {String}  name  用户 ID
   * @apiParam  {String}  display_name  用户昵称
   * @apiParam  {String}  email 用户邮箱
   * @apiParam  {String}  password  用户密码
   */
  postAction() {
    this.rules = {
      name: {
        required: true,
        string: true,
        regexp: /[a-z0-9-_.]{4,}/i
      },
      display_name: {
        required: true,
        string: true,
        length: {min: 4, max: 10}
      },
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        string: true,
        length: {min: 8, max: 20}
      }
    };
  }
};