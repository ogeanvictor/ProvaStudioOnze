'use strict'

const Company = require('../models/company');

exports.create = async (company) => {
    try {
        console.log(company)
        let createdCompany = await Company.create({
            name: company.name,
            cnpj: company.cnpj,
            photo: Buffer.from(company.photo, 'base64')
        });

        console.log(createdCompany)
    
        return createdCompany;
    } catch (error) {
        return error.errors[0].message;
    }
};

exports.findAll = async () => {
    try {
        let company = await Company.findAll();

        return company;
    } catch (error) {
        return error.errors[0].message;
    }
};

exports.findById = async (id) => {
    try {
        let company = await Company.findByPk(id);

        return company;
    } catch (error) {
        return error.errors[0].message;
    }
};

exports.update = async (company) => {
    try {
        let updatedCompany = await Company.update(company, {
            where: {
                id: company.id
            }
        });

        return updatedCompany;
    } catch (error) {
        return error.errors[0].message;
    }
};

exports.delete = async (id) => {
    try {
        let company = await Company.destroy({
            where: {
                id: id
            }
        });

        return company;
    } catch (error) {
        return error.errors[0].message;
    }
};
