const taskRepository = require("../repository/task.repository");

class TaskService {
  constructor() {}

  async get() {
    return await taskRepository.get();
  }

  async create(task) {
    return await taskRepository.create(task);
  }

  async update(task) {
    return await taskRepository.update(task);
  }

  async delete(taskId) {
    return await taskRepository.delete(taskId);
  }
}

module.exports = new TaskService();
