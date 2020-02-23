import request from '@/plugins/axios'

//host:ahmedseoudipro.site/wp-json

export function getPostsFromWpV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/posts`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postPostsFromWpV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/posts`,method:'post',}).then(res => {
		return res.data
	})}
export function getPostsByIdFromWpV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/posts/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postPostsByIdFromWpV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/posts/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deletePostsByIdFromWpV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/posts/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function getRevisionsFromWpVPostsByParent(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/posts/${parent}/revisions`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getRevisionsByIdFromWpVPostsByParent(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/posts/${parent}/revisions/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function deleteRevisionsByIdFromWpVPostsByParent(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/posts/${parent}/revisions/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function getAutosavesFromWpVPostsById(id,params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/posts/${id}/autosaves`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postAutosavesFromWpVPostsById(id,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/posts/${id}/autosaves`,method:'post',}).then(res => {
		return res.data
	})}
export function getAutosavesByIdFromWpVPostsByParent(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/posts/${parent}/autosaves/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getPagesFromWpV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/pages`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postPagesFromWpV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/pages`,method:'post',}).then(res => {
		return res.data
	})}
export function getPagesByIdFromWpV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/pages/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postPagesByIdFromWpV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/pages/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deletePagesByIdFromWpV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/pages/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function getRevisionsFromWpVPagesByParent(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/pages/${parent}/revisions`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getRevisionsByIdFromWpVPagesByParent(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/pages/${parent}/revisions/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function deleteRevisionsByIdFromWpVPagesByParent(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/pages/${parent}/revisions/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function getAutosavesFromWpVPagesById(id,params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/pages/${id}/autosaves`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postAutosavesFromWpVPagesById(id,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/pages/${id}/autosaves`,method:'post',}).then(res => {
		return res.data
	})}
export function getAutosavesByIdFromWpVPagesByParent(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/pages/${parent}/autosaves/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getMediaFromWpV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/media`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postMediaFromWpV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/media`,method:'post',}).then(res => {
		return res.data
	})}
export function getMediaByIdFromWpV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/media/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postMediaByIdFromWpV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/media/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteMediaByIdFromWpV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/media/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function getBlocksFromWpV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/blocks`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postBlocksFromWpV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/blocks`,method:'post',}).then(res => {
		return res.data
	})}
export function getBlocksByIdFromWpV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/blocks/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postBlocksByIdFromWpV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/blocks/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteBlocksByIdFromWpV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/blocks/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function getAutosavesFromWpVBlocksById(id,params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/blocks/${id}/autosaves`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postAutosavesFromWpVBlocksById(id,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/blocks/${id}/autosaves`,method:'post',}).then(res => {
		return res.data
	})}
export function getAutosavesByIdFromWpVBlocksByParent(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/blocks/${parent}/autosaves/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getProductFromWpV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/product`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postProductFromWpV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/product`,method:'post',}).then(res => {
		return res.data
	})}
export function getProductByIdFromWpV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/product/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postProductByIdFromWpV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/product/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteProductByIdFromWpV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/product/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function getAutosavesFromWpVProductById(id,params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/product/${id}/autosaves`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postAutosavesFromWpVProductById(id,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/product/${id}/autosaves`,method:'post',}).then(res => {
		return res.data
	})}
export function getAutosavesByIdFromWpVProductByParent(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/product/${parent}/autosaves/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getTypesFromWpV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/types`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getTypesByTypeFromWpV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/types/${type}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getStatusesFromWpV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/statuses`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getStatusesByStatusFromWpV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/statuses/${status}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getTaxonomiesFromWpV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/taxonomies`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getTaxonomiesByTaxonomyFromWpV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/taxonomies/${taxonomy}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getCategoriesFromWpV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/categories`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postCategoriesFromWpV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/categories`,method:'post',}).then(res => {
		return res.data
	})}
export function getCategoriesByIdFromWpV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/categories/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postCategoriesByIdFromWpV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/categories/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteCategoriesByIdFromWpV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/categories/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function getTagsFromWpV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/tags`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postTagsFromWpV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/tags`,method:'post',}).then(res => {
		return res.data
	})}
export function getTagsByIdFromWpV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/tags/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postTagsByIdFromWpV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/tags/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteTagsByIdFromWpV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/tags/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function getUsersFromWpV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/users`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postUsersFromWpV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/users`,method:'post',}).then(res => {
		return res.data
	})}
export function getUsersByIdFromWpV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/users/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postUsersByIdFromWpV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/users/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteUsersByIdFromWpV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/users/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function getMeFromWpVUsers(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/users/me`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postMeFromWpVUsers(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/users/me`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteMeFromWpVUsers(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/users/me`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function getCommentsFromWpV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/comments`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postCommentsFromWpV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/comments`,method:'post',}).then(res => {
		return res.data
	})}
export function getCommentsByIdFromWpV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/comments/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postCommentsByIdFromWpV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/comments/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteCommentsByIdFromWpV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/comments/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function getSearchFromWpV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/search`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getBlockRendererByNameFromWpV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/block-renderer/${name}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getSettingsFromWpV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/settings`,method:'get',}).then(res => {
		return res.data
	})}
export function postSettingsFromWpV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/settings`,method:'post',}).then(res => {
		return res.data
	})}
export function getThemesFromWpV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wp/v2/themes`,method:'get',params,}).then(res => {
		return res.data
	})}
