import router from 'koa-joi-router'
const {Joi} = router
import * as param from './query.param.js'
import {
  NanoId,
  ResponseModel,
  UpdateConditions,
  BaseEntity
} from './base.model.js'

const HolidayModel = Joi.object({
  id: NanoId,
  name: Joi.string(),
  salary: Joi.number(),
  joinDate: Joi.date(),
  leaveDate: Joi.date(),
  payroll: Joi.number()
});

const RequireModel = HolidayModel
      .fork(['name', 'salary', 'joinDate', 'payroll'], schema => schema.required())
      .fork(['leaveDate'], schema => schema.optional().allow(null));

const OptionalModel = HolidayModel;

const InputModel = RequireModel;

const OutputObject = InputModel
  .concat(BaseEntity)
  .options({
    stripUnknown: true
  });

const OutputObjects = param.PaggingResultModel.concat(
  Joi.object({
    rows: Joi.array().items(OutputObject.optional())
  })
);

const OutputModel = ResponseModel.concat(
  Joi.object({
    data: OutputObject
  })
);

const OutputModels = ResponseModel.concat(
  Joi.object({
    data: OutputObjects
  })
);

const UpdateModel = Joi.object({  
  fields: OptionalModel.required(),
  conditions: UpdateConditions.required()
}).options({
  stripUnknown: true
});

const QueryModel = param.baseParam.concat(Joi.object({
  name: param.string,
  salary: param.number,
  joinDate: param.date,
  leaveDate: param.date,
  payroll: param.date
}));

export {
  InputModel,
  OutputModel,
  OutputModels,
  UpdateModel,
  QueryModel
};