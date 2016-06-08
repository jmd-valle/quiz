'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return  queryInterface.addColumn( 'Comments', 
                                        'AutorId', 
                                        { type: Sequelize.STRING }
                                      );
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.removeColumn('Comments','AutorId');
  }
};
