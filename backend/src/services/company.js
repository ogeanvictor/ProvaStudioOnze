'use strict'

const repository = require("../repositories/company");

exports.create = async (company) => {
    try {
      let createdCompany = await repository.save(company);
      return createdCompany;
    } catch (error) {
      return error.message;
    }
};

exports.findAll = async () => {
    try {
      let companys = await repository.findAll();
      return companys;
    } catch (error) {
      return error.message;
    }
};

exports.findById = async (id) => {
    try {
      let company = await repository.findById(id);
      return company;
    } catch (error) {
      return error.message;
    }
};

exports.update = async (company) => {
    try {
      let updatedCompany = await repository.update(company);
      return updatedCompany;
    } catch (error) {
      return error.message;
    }
};

exports.delete = async (id) => {
    try {
        let company = await repository.delete(id);
        return company;
    } catch (error){
        return error.message;
    }
};
