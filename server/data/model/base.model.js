import router from 'koa-joi-router'
const {Joi} = router
export const NanoId = Joi.string().length(9).hex();

export const ResponseModel = Joi.object({
  status: Joi.string(),
  message: Joi.string()
    .optional()
    .allow('', null)
}).options({ allowUnknown: true });

export const UpdateConditions = Joi.object({
  id: Joi.string(),
  updatedAt: Joi.date().required()
});

export const BaseEntity = UpdateConditions.concat(Joi.object({
  createdAt: Joi.date().required()
}));
