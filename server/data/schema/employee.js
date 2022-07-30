import { Sequelize } from 'sequelize'
import { customAlphabet } from 'nanoid'
const nanoid = customAlphabet('1234567890abcdef',9)
export default function Employee(orm){
  return orm.define(
    'Employee',
    {
      id: {
        type: Sequelize.CHAR(7),
        defaultValue: () => nanoid(),
        primaryKey: true
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      salary: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      joinDate: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      leaveDate: {
        type: Sequelize.DATEONLY,
        allowNull: true,
        defaultValue: null
      },
      payroll: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    }
  );
};
