import request from 'src/plugins/axios'
export function getCommonCheckFieldList(){return request({url: '/api1/common/checkFieldList ',method:'get',})}export function getCommonOperatorList(){return request({url: '/api1/common/operatorList ',method:'get',})}export function getCommonPriorityLevelList(){return request({url: '/api1/common/priorityLevelList ',method:'get',})}export function getCommonPushTypeList(){return request({url: '/api1/common/pushTypeList ',method:'get',})}export function getCommonReceiveTypeList(){return request({url: '/api1/common/receiveTypeList ',method:'get',})}export function getCommonRuleTypeList(){return request({url: '/api1/common/ruleTypeList ',method:'get',})}export function getCommonSendTypeList(){return request({url: '/api1/common/sendTypeList ',method:'get',})}export function getCommonTimeUnitList(){return request({url: '/api1/common/timeUnitList ',method:'get',})}