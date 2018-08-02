// import { ENGINE_METHOD_PKEY_ASN1_METHS } from "constants";

exports.up = function(knex, Promise) {
    return knex.schema.createTable("student", table => { 
        table.increments();
        table.text('first_name');
        table.text('last_name');
        table.text('prior_occupation'); 
        table.text('hometown');
    
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("student");
};
