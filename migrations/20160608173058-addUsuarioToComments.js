'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return  queryInterface.addColumn( 'Comments', 
                                        'Usuario', 
                                        { type: Sequelize.STRING }
                                      );
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.removeColumn('Comments','Usuario');
  }
};
