const taskService = require("../service/task.service");
const logger = require("../logger/api.logger");

class TodoController {
  async get() {
    logger.info("Controller: get");
    return await taskService.get();
  }

  async create(task) {
    logger.info("Controller: create", task);
    return await taskService.create(task);
  }

  async update(task) {
    logger.info("Controller: update", task);
    return await taskService.update(task);
  }

  async delete(taskId) {
    logger.info("Controller: delete", taskId);
    return await taskService.delete(taskId);
  }
}
module.exports = new TodoController();
