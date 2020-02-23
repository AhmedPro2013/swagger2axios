import request from '@/plugins/axios'

//host:ahmedseoudipro.site/wp-json

export function getNotesFromWcAnalyticsAdmin(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/admin/notes`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getNotesByIdFromWcAnalyticsAdmin(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/admin/notes/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postNotesByIdFromWcAnalyticsAdmin(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/admin/notes/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function postActionByActionidFromWcAnalyticsAdminNotesByNoteid(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/admin/notes/${note_id}/action/${action_id}`,method:'post',}).then(res => {
		return res.data
	})}
export function getCouponsFromWcAnalytics(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/coupons`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postCouponsFromWcAnalytics(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/coupons`,method:'post',}).then(res => {
		return res.data
	})}
export function getCouponsByIdFromWcAnalytics(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/coupons/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postCouponsByIdFromWcAnalytics(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/coupons/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteCouponsByIdFromWcAnalytics(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/coupons/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcAnalyticsCoupons(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/coupons/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getCustomersFromWcAnalytics(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/customers`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getCustomersByIdFromWcAnalytics(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/customers/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getDataFromWcAnalytics(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/data`,method:'get',}).then(res => {
		return res.data
	})}
export function getCountriesFromWcAnalyticsData(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/data/countries`,method:'get',}).then(res => {
		return res.data
	})}
export function getCountriesByLocationFromWcAnalyticsData(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/data/countries/${location}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getDownloadIpsFromWcAnalyticsData(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/data/download-ips`,method:'get',}).then(res => {
		return res.data
	})}
export function getLeaderboardsFromWcAnalytics(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/leaderboards`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getAllowedFromWcAnalyticsLeaderboards(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/leaderboards/allowed`,method:'get',}).then(res => {
		return res.data
	})}
export function getOptionsFromWcAdmin(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-admin/options`,method:'get',}).then(res => {
		return res.data
	})}
export function postOptionsFromWcAdmin(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-admin/options`,method:'post',}).then(res => {
		return res.data
	})}
export function getOrdersFromWcAnalytics(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/orders`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postOrdersFromWcAnalytics(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/orders`,method:'post',}).then(res => {
		return res.data
	})}
export function getOrdersByIdFromWcAnalytics(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/orders/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postOrdersByIdFromWcAnalytics(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/orders/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteOrdersByIdFromWcAnalytics(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/orders/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcAnalyticsOrders(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/orders/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getProductsFromWcAnalytics(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/products`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postProductsFromWcAnalytics(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/products`,method:'post',}).then(res => {
		return res.data
	})}
export function getProductsByIdFromWcAnalytics(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/products/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postProductsByIdFromWcAnalytics(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/products/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteProductsByIdFromWcAnalytics(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/products/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcAnalyticsProducts(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/products/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getCategoriesFromWcAnalyticsProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/products/categories`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postCategoriesFromWcAnalyticsProducts(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/products/categories`,method:'post',}).then(res => {
		return res.data
	})}
export function getCategoriesByIdFromWcAnalyticsProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/products/categories/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postCategoriesByIdFromWcAnalyticsProducts(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/products/categories/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteCategoriesByIdFromWcAnalyticsProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/products/categories/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcAnalyticsProductsCategories(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/products/categories/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getVariationsFromWcAnalyticsProductsByProductid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/products/${product_id}/variations`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postVariationsFromWcAnalyticsProductsByProductid(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/products/${product_id}/variations`,method:'post',}).then(res => {
		return res.data
	})}
export function getVariationsByIdFromWcAnalyticsProductsByProductid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/products/${product_id}/variations/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postVariationsByIdFromWcAnalyticsProductsByProductid(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/products/${product_id}/variations/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteVariationsByIdFromWcAnalyticsProductsByProductid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/products/${product_id}/variations/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcAnalyticsProductsByProductidVariations(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/products/${product_id}/variations/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getReviewsFromWcAnalyticsProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/products/reviews`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postReviewsFromWcAnalyticsProducts(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/products/reviews`,method:'post',}).then(res => {
		return res.data
	})}
export function getReviewsByIdFromWcAnalyticsProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/products/reviews/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postReviewsByIdFromWcAnalyticsProducts(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/products/reviews/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteReviewsByIdFromWcAnalyticsProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/products/reviews/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcAnalyticsProductsReviews(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/products/reviews/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getReportsFromWcAnalytics(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/reports`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getSettingsByGroupidFromWcAnalytics(group_id,params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/settings/${group_id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcAnalyticsSettingsByGroupid(group_id,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/settings/${group_id}/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getSettingsByGroupidByIdFromWcAnalytics(group_id,params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/settings/${group_id}/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postSettingsByGroupidByIdFromWcAnalytics(group_id,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/settings/${group_id}/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function postImportFromWcAnalyticsReports(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/reports/import`,method:'post',}).then(res => {
		return res.data
	})}
export function postCancelFromWcAnalyticsReportsImport(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/reports/import/cancel`,method:'post',}).then(res => {
		return res.data
	})}
export function postDeleteFromWcAnalyticsReportsImport(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/reports/import/delete`,method:'post',}).then(res => {
		return res.data
	})}
export function getStatusFromWcAnalyticsReportsImport(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/reports/import/status`,method:'get',}).then(res => {
		return res.data
	})}
export function getTotalsFromWcAnalyticsReportsImport(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/reports/import/totals`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postExportFromWcAnalyticsReportsByType(type,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/reports/${type}/export`,method:'post',}).then(res => {
		return res.data
	})}
export function getStatusFromWcAnalyticsReportsByTypeExportByExportid(type,export_id,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/reports/${type}/export/${export_id}/status`,method:'get',}).then(res => {
		return res.data
	})}
export function getProductsFromWcAnalyticsReports(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/reports/products`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getVariationsFromWcAnalyticsReports(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/reports/variations`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getStatsFromWcAnalyticsReportsProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/reports/products/stats`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getStatsFromWcAnalyticsReportsRevenue(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/reports/revenue/stats`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getOrdersFromWcAnalyticsReports(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/reports/orders`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getStatsFromWcAnalyticsReportsOrders(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/reports/orders/stats`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getCategoriesFromWcAnalyticsReports(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/reports/categories`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getTaxesFromWcAnalyticsReports(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/reports/taxes`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getStatsFromWcAnalyticsReportsTaxes(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/reports/taxes/stats`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getCouponsFromWcAnalyticsReports(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/reports/coupons`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getStatsFromWcAnalyticsReportsCoupons(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/reports/coupons/stats`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getStockFromWcAnalyticsReports(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/reports/stock`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getStatsFromWcAnalyticsReportsStock(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/reports/stock/stats`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getDownloadsFromWcAnalyticsReports(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/reports/downloads`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getStatsFromWcAnalyticsReportsDownloads(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/reports/downloads/stats`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getCustomersFromWcAnalyticsReports(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/reports/customers`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getStatsFromWcAnalyticsReportsCustomers(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/reports/customers/stats`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getTaxesFromWcAnalytics(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/taxes`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postTaxesFromWcAnalytics(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/taxes`,method:'post',}).then(res => {
		return res.data
	})}
export function getTaxesByIdFromWcAnalytics(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/taxes/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postTaxesByIdFromWcAnalytics(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/taxes/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteTaxesByIdFromWcAnalytics(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/taxes/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcAnalyticsTaxes(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/taxes/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function postThemesFromWcAdmin(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-admin/themes`,method:'post',}).then(res => {
		return res.data
	})}
export function getPerformanceIndicatorsFromWcAnalyticsReports(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/reports/performance-indicators`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getAllowedFromWcAnalyticsReportsPerformanceIndicators(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc-analytics/reports/performance-indicators/allowed`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getAttributesFromWcBlocksProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/blocks/products/attributes`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getAttributesByIdFromWcBlocksProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/blocks/products/attributes/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getTermsFromWcBlocksProductsAttributesByAttributeid(attribute_id,params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/blocks/products/attributes/${attribute_id}/terms`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getTermsByIdFromWcBlocksProductsAttributesByAttributeid(attribute_id,params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/blocks/products/attributes/${attribute_id}/terms/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getCategoriesFromWcBlocksProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/blocks/products/categories`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getCategoriesByIdFromWcBlocksProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/blocks/products/categories/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getTagsFromWcBlocksProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/blocks/products/tags`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getTagsByIdFromWcBlocksProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/blocks/products/tags/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getProductsFromWcBlocks(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/blocks/products`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getProductsByIdFromWcBlocks(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/blocks/products/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getVariationsFromWcBlocksProductsByProductid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/blocks/products/${product_id}/variations`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getReviewsFromWcBlocksProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/blocks/products/reviews`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getCartFromWcStore(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/store/cart`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getItemsFromWcStoreCart(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/store/cart/items`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postItemsFromWcStoreCart(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/store/cart/items`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteItemsFromWcStoreCart(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/store/cart/items`,method:'delete',}).then(res => {
		return res.data
	})}
export function getItemsByKeyFromWcStoreCart(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/store/cart/items/${key}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postItemsByKeyFromWcStoreCart(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/store/cart/items/${key}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteItemsByKeyFromWcStoreCart(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/store/cart/items/${key}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function getProductsFromWcStore(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/store/products`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getProductsByIdFromWcStore(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/store/products/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getCollectionDataFromWcStoreProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/store/products/collection-data`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getAttributesFromWcStoreProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/store/products/attributes`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getAttributesByIdFromWcStoreProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/store/products/attributes/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getTermsFromWcStoreProductsAttributesByAttributeid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/store/products/attributes/${attribute_id}/terms`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getCouponsFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/coupons`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postCouponsFromWcV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/coupons`,method:'post',}).then(res => {
		return res.data
	})}
export function getCouponsByIdFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/coupons/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postCouponsByIdFromWcV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/coupons/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteCouponsByIdFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/coupons/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcVCoupons(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/coupons/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getDownloadsFromWcVCustomersByCustomerid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/customers/${customer_id}/downloads`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getCustomersFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/customers`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postCustomersFromWcV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/customers`,method:'post',}).then(res => {
		return res.data
	})}
export function getCustomersByIdFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/customers/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postCustomersByIdFromWcV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/customers/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteCustomersByIdFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/customers/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcVCustomers(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/customers/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getNotesFromWcVOrdersByOrderid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/orders/${order_id}/notes`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postNotesFromWcVOrdersByOrderid(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/orders/${order_id}/notes`,method:'post',}).then(res => {
		return res.data
	})}
export function getNotesByIdFromWcVOrdersByOrderid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/orders/${order_id}/notes/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function deleteNotesByIdFromWcVOrdersByOrderid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/orders/${order_id}/notes/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function getRefundsFromWcVOrdersByOrderid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/orders/${order_id}/refunds`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postRefundsFromWcVOrdersByOrderid(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/orders/${order_id}/refunds`,method:'post',}).then(res => {
		return res.data
	})}
export function getRefundsByIdFromWcVOrdersByOrderid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/orders/${order_id}/refunds/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function deleteRefundsByIdFromWcVOrdersByOrderid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/orders/${order_id}/refunds/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function getOrdersFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/orders`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postOrdersFromWcV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/orders`,method:'post',}).then(res => {
		return res.data
	})}
export function getOrdersByIdFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/orders/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postOrdersByIdFromWcV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/orders/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteOrdersByIdFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/orders/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcVOrders(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/orders/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getTermsFromWcVProductsAttributesByAttributeid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/products/attributes/${attribute_id}/terms`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postTermsFromWcVProductsAttributesByAttributeid(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/products/attributes/${attribute_id}/terms`,method:'post',}).then(res => {
		return res.data
	})}
export function getTermsByIdFromWcVProductsAttributesByAttributeid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/products/attributes/${attribute_id}/terms/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postTermsByIdFromWcVProductsAttributesByAttributeid(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/products/attributes/${attribute_id}/terms/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteTermsByIdFromWcVProductsAttributesByAttributeid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/products/attributes/${attribute_id}/terms/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcVProductsAttributesByAttributeidTerms(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/products/attributes/${attribute_id}/terms/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getAttributesFromWcVProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/products/attributes`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postAttributesFromWcVProducts(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/products/attributes`,method:'post',}).then(res => {
		return res.data
	})}
export function getAttributesByIdFromWcVProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/products/attributes/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postAttributesByIdFromWcVProducts(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/products/attributes/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteAttributesByIdFromWcVProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/products/attributes/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcVProductsAttributes(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/products/attributes/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getCategoriesFromWcVProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/products/categories`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postCategoriesFromWcVProducts(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/products/categories`,method:'post',}).then(res => {
		return res.data
	})}
export function getCategoriesByIdFromWcVProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/products/categories/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postCategoriesByIdFromWcVProducts(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/products/categories/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteCategoriesByIdFromWcVProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/products/categories/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcVProductsCategories(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/products/categories/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getReviewsFromWcVProductsByProductid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/products/${product_id}/reviews`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postReviewsFromWcVProductsByProductid(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/products/${product_id}/reviews`,method:'post',}).then(res => {
		return res.data
	})}
export function getReviewsByIdFromWcVProductsByProductid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/products/${product_id}/reviews/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postReviewsByIdFromWcVProductsByProductid(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/products/${product_id}/reviews/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteReviewsByIdFromWcVProductsByProductid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/products/${product_id}/reviews/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function getShippingclassesFromWcVProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/products/shipping_classes`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postShippingclassesFromWcVProducts(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/products/shipping_classes`,method:'post',}).then(res => {
		return res.data
	})}
export function getShippingclassesByIdFromWcVProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/products/shipping_classes/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postShippingclassesByIdFromWcVProducts(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/products/shipping_classes/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteShippingclassesByIdFromWcVProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/products/shipping_classes/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcVProductsShippingclasses(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/products/shipping_classes/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getTagsFromWcVProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/products/tags`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postTagsFromWcVProducts(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/products/tags`,method:'post',}).then(res => {
		return res.data
	})}
export function getTagsByIdFromWcVProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/products/tags/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postTagsByIdFromWcVProducts(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/products/tags/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteTagsByIdFromWcVProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/products/tags/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcVProductsTags(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/products/tags/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getProductsFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/products`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postProductsFromWcV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/products`,method:'post',}).then(res => {
		return res.data
	})}
export function getProductsByIdFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/products/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postProductsByIdFromWcV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/products/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteProductsByIdFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/products/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcVProducts(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/products/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getSalesFromWcVReports(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/reports/sales`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getTopsellersFromWcVReports(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/reports/top_sellers`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getReportsFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/reports`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getClassesFromWcVTaxes(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/taxes/classes`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postClassesFromWcVTaxes(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/taxes/classes`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteClassesBySlugFromWcVTaxes(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/taxes/classes/${slug}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function getTaxesFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/taxes`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postTaxesFromWcV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/taxes`,method:'post',}).then(res => {
		return res.data
	})}
export function getTaxesByIdFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/taxes/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postTaxesByIdFromWcV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/taxes/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteTaxesByIdFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/taxes/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcVTaxes(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/taxes/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getWebhooksFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/webhooks`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postWebhooksFromWcV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/webhooks`,method:'post',}).then(res => {
		return res.data
	})}
export function getWebhooksByIdFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/webhooks/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postWebhooksByIdFromWcV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/webhooks/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteWebhooksByIdFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/webhooks/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcVWebhooks(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/webhooks/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getDeliveriesFromWcVWebhooksByWebhookid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/webhooks/${webhook_id}/deliveries`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getDeliveriesByIdFromWcVWebhooksByWebhookid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v1/webhooks/${webhook_id}/deliveries/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getCouponsFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/coupons`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postCouponsFromWcV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/coupons`,method:'post',}).then(res => {
		return res.data
	})}
export function getCouponsByIdFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/coupons/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postCouponsByIdFromWcV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/coupons/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteCouponsByIdFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/coupons/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcVCoupons(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/coupons/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getDownloadsFromWcVCustomersByCustomerid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/customers/${customer_id}/downloads`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getCustomersFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/customers`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postCustomersFromWcV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/customers`,method:'post',}).then(res => {
		return res.data
	})}
export function getCustomersByIdFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/customers/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postCustomersByIdFromWcV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/customers/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteCustomersByIdFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/customers/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcVCustomers(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/customers/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getNotesFromWcVOrdersByOrderid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/orders/${order_id}/notes`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postNotesFromWcVOrdersByOrderid(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/orders/${order_id}/notes`,method:'post',}).then(res => {
		return res.data
	})}
export function getNotesByIdFromWcVOrdersByOrderid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/orders/${order_id}/notes/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function deleteNotesByIdFromWcVOrdersByOrderid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/orders/${order_id}/notes/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function getRefundsFromWcVOrdersByOrderid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/orders/${order_id}/refunds`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postRefundsFromWcVOrdersByOrderid(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/orders/${order_id}/refunds`,method:'post',}).then(res => {
		return res.data
	})}
export function getRefundsByIdFromWcVOrdersByOrderid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/orders/${order_id}/refunds/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function deleteRefundsByIdFromWcVOrdersByOrderid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/orders/${order_id}/refunds/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function getOrdersFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/orders`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postOrdersFromWcV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/orders`,method:'post',}).then(res => {
		return res.data
	})}
export function getOrdersByIdFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/orders/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postOrdersByIdFromWcV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/orders/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteOrdersByIdFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/orders/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcVOrders(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/orders/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getTermsFromWcVProductsAttributesByAttributeid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products/attributes/${attribute_id}/terms`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postTermsFromWcVProductsAttributesByAttributeid(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products/attributes/${attribute_id}/terms`,method:'post',}).then(res => {
		return res.data
	})}
export function getTermsByIdFromWcVProductsAttributesByAttributeid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products/attributes/${attribute_id}/terms/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postTermsByIdFromWcVProductsAttributesByAttributeid(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products/attributes/${attribute_id}/terms/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteTermsByIdFromWcVProductsAttributesByAttributeid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products/attributes/${attribute_id}/terms/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcVProductsAttributesByAttributeidTerms(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products/attributes/${attribute_id}/terms/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getAttributesFromWcVProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products/attributes`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postAttributesFromWcVProducts(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products/attributes`,method:'post',}).then(res => {
		return res.data
	})}
export function getAttributesByIdFromWcVProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products/attributes/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postAttributesByIdFromWcVProducts(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products/attributes/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteAttributesByIdFromWcVProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products/attributes/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcVProductsAttributes(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products/attributes/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getCategoriesFromWcVProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products/categories`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postCategoriesFromWcVProducts(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products/categories`,method:'post',}).then(res => {
		return res.data
	})}
export function getCategoriesByIdFromWcVProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products/categories/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postCategoriesByIdFromWcVProducts(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products/categories/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteCategoriesByIdFromWcVProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products/categories/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcVProductsCategories(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products/categories/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getReviewsFromWcVProductsByProductid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products/${product_id}/reviews`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postReviewsFromWcVProductsByProductid(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products/${product_id}/reviews`,method:'post',}).then(res => {
		return res.data
	})}
export function getReviewsByIdFromWcVProductsByProductid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products/${product_id}/reviews/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postReviewsByIdFromWcVProductsByProductid(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products/${product_id}/reviews/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteReviewsByIdFromWcVProductsByProductid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products/${product_id}/reviews/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcVProductsByProductidReviews(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products/${product_id}/reviews/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getShippingclassesFromWcVProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products/shipping_classes`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postShippingclassesFromWcVProducts(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products/shipping_classes`,method:'post',}).then(res => {
		return res.data
	})}
export function getShippingclassesByIdFromWcVProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products/shipping_classes/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postShippingclassesByIdFromWcVProducts(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products/shipping_classes/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteShippingclassesByIdFromWcVProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products/shipping_classes/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcVProductsShippingclasses(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products/shipping_classes/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getTagsFromWcVProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products/tags`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postTagsFromWcVProducts(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products/tags`,method:'post',}).then(res => {
		return res.data
	})}
export function getTagsByIdFromWcVProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products/tags/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postTagsByIdFromWcVProducts(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products/tags/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteTagsByIdFromWcVProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products/tags/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcVProductsTags(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products/tags/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getProductsFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postProductsFromWcV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products`,method:'post',}).then(res => {
		return res.data
	})}
export function getProductsByIdFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postProductsByIdFromWcV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteProductsByIdFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcVProducts(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getVariationsFromWcVProductsByProductid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products/${product_id}/variations`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postVariationsFromWcVProductsByProductid(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products/${product_id}/variations`,method:'post',}).then(res => {
		return res.data
	})}
export function getVariationsByIdFromWcVProductsByProductid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products/${product_id}/variations/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postVariationsByIdFromWcVProductsByProductid(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products/${product_id}/variations/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteVariationsByIdFromWcVProductsByProductid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products/${product_id}/variations/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcVProductsByProductidVariations(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/products/${product_id}/variations/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getSalesFromWcVReports(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/reports/sales`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getTopsellersFromWcVReports(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/reports/top_sellers`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getReportsFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/reports`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getSettingsFromWcV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/settings`,method:'get',}).then(res => {
		return res.data
	})}
export function getSettingsByGroupidFromWcV(group_id,params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/settings/${group_id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcVSettingsByGroupid(group_id,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/settings/${group_id}/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getSettingsByGroupidByIdFromWcV(group_id,params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/settings/${group_id}/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postSettingsByGroupidByIdFromWcV(group_id,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/settings/${group_id}/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function getZonesFromWcVShipping(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/shipping/zones`,method:'get',}).then(res => {
		return res.data
	})}
export function postZonesFromWcVShipping(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/shipping/zones`,method:'post',}).then(res => {
		return res.data
	})}
export function getZonesByIdFromWcVShipping(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/shipping/zones/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postZonesByIdFromWcVShipping(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/shipping/zones/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteZonesByIdFromWcVShipping(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/shipping/zones/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function getLocationsFromWcVShippingZonesById(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/shipping/zones/${id}/locations`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postLocationsFromWcVShippingZonesById(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/shipping/zones/${id}/locations`,method:'post',}).then(res => {
		return res.data
	})}
export function getMethodsFromWcVShippingZonesByZoneid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/shipping/zones/${zone_id}/methods`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postMethodsFromWcVShippingZonesByZoneid(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/shipping/zones/${zone_id}/methods`,method:'post',}).then(res => {
		return res.data
	})}
export function getMethodsByInstanceidFromWcVShippingZonesByZoneid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/shipping/zones/${zone_id}/methods/${instance_id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postMethodsByInstanceidFromWcVShippingZonesByZoneid(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/shipping/zones/${zone_id}/methods/${instance_id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteMethodsByInstanceidFromWcVShippingZonesByZoneid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/shipping/zones/${zone_id}/methods/${instance_id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function getClassesFromWcVTaxes(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/taxes/classes`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postClassesFromWcVTaxes(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/taxes/classes`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteClassesBySlugFromWcVTaxes(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/taxes/classes/${slug}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function getTaxesFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/taxes`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postTaxesFromWcV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/taxes`,method:'post',}).then(res => {
		return res.data
	})}
export function getTaxesByIdFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/taxes/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postTaxesByIdFromWcV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/taxes/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteTaxesByIdFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/taxes/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcVTaxes(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/taxes/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getWebhooksFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/webhooks`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postWebhooksFromWcV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/webhooks`,method:'post',}).then(res => {
		return res.data
	})}
export function getWebhooksByIdFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/webhooks/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postWebhooksByIdFromWcV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/webhooks/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteWebhooksByIdFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/webhooks/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcVWebhooks(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/webhooks/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getDeliveriesFromWcVWebhooksByWebhookid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/webhooks/${webhook_id}/deliveries`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getDeliveriesByIdFromWcVWebhooksByWebhookid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/webhooks/${webhook_id}/deliveries/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getSystemstatusFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/system_status`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getToolsFromWcVSystemstatus(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/system_status/tools`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getToolsByIdFromWcVSystemstatus(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/system_status/tools/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postToolsByIdFromWcVSystemstatus(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/system_status/tools/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function getShippingmethodsFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/shipping_methods`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getShippingmethodsByIdFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/shipping_methods/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getPaymentgatewaysFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/payment_gateways`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getPaymentgatewaysByIdFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/payment_gateways/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postPaymentgatewaysByIdFromWcV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v2/payment_gateways/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function getCouponsFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/coupons`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postCouponsFromWcV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/coupons`,method:'post',}).then(res => {
		return res.data
	})}
export function getCouponsByIdFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/coupons/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postCouponsByIdFromWcV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/coupons/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteCouponsByIdFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/coupons/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcVCoupons(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/coupons/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getDownloadsFromWcVCustomersByCustomerid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/customers/${customer_id}/downloads`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getCustomersFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/customers`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postCustomersFromWcV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/customers`,method:'post',}).then(res => {
		return res.data
	})}
export function getCustomersByIdFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/customers/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postCustomersByIdFromWcV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/customers/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteCustomersByIdFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/customers/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcVCustomers(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/customers/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getNotesFromWcVOrdersByOrderid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/orders/${order_id}/notes`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postNotesFromWcVOrdersByOrderid(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/orders/${order_id}/notes`,method:'post',}).then(res => {
		return res.data
	})}
export function getNotesByIdFromWcVOrdersByOrderid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/orders/${order_id}/notes/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function deleteNotesByIdFromWcVOrdersByOrderid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/orders/${order_id}/notes/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function getRefundsFromWcVOrdersByOrderid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/orders/${order_id}/refunds`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postRefundsFromWcVOrdersByOrderid(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/orders/${order_id}/refunds`,method:'post',}).then(res => {
		return res.data
	})}
export function getRefundsByIdFromWcVOrdersByOrderid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/orders/${order_id}/refunds/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function deleteRefundsByIdFromWcVOrdersByOrderid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/orders/${order_id}/refunds/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function getOrdersFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/orders`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postOrdersFromWcV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/orders`,method:'post',}).then(res => {
		return res.data
	})}
export function getOrdersByIdFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/orders/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postOrdersByIdFromWcV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/orders/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteOrdersByIdFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/orders/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcVOrders(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/orders/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getTermsFromWcVProductsAttributesByAttributeid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products/attributes/${attribute_id}/terms`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postTermsFromWcVProductsAttributesByAttributeid(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products/attributes/${attribute_id}/terms`,method:'post',}).then(res => {
		return res.data
	})}
export function getTermsByIdFromWcVProductsAttributesByAttributeid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products/attributes/${attribute_id}/terms/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postTermsByIdFromWcVProductsAttributesByAttributeid(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products/attributes/${attribute_id}/terms/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteTermsByIdFromWcVProductsAttributesByAttributeid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products/attributes/${attribute_id}/terms/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcVProductsAttributesByAttributeidTerms(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products/attributes/${attribute_id}/terms/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getAttributesFromWcVProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products/attributes`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postAttributesFromWcVProducts(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products/attributes`,method:'post',}).then(res => {
		return res.data
	})}
export function getAttributesByIdFromWcVProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products/attributes/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postAttributesByIdFromWcVProducts(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products/attributes/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteAttributesByIdFromWcVProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products/attributes/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcVProductsAttributes(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products/attributes/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getCategoriesFromWcVProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products/categories`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postCategoriesFromWcVProducts(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products/categories`,method:'post',}).then(res => {
		return res.data
	})}
export function getCategoriesByIdFromWcVProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products/categories/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postCategoriesByIdFromWcVProducts(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products/categories/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteCategoriesByIdFromWcVProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products/categories/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcVProductsCategories(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products/categories/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getReviewsFromWcVProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products/reviews`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postReviewsFromWcVProducts(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products/reviews`,method:'post',}).then(res => {
		return res.data
	})}
export function getReviewsByIdFromWcVProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products/reviews/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postReviewsByIdFromWcVProducts(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products/reviews/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteReviewsByIdFromWcVProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products/reviews/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcVProductsReviews(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products/reviews/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getShippingclassesFromWcVProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products/shipping_classes`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postShippingclassesFromWcVProducts(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products/shipping_classes`,method:'post',}).then(res => {
		return res.data
	})}
export function getShippingclassesByIdFromWcVProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products/shipping_classes/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postShippingclassesByIdFromWcVProducts(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products/shipping_classes/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteShippingclassesByIdFromWcVProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products/shipping_classes/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcVProductsShippingclasses(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products/shipping_classes/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getTagsFromWcVProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products/tags`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postTagsFromWcVProducts(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products/tags`,method:'post',}).then(res => {
		return res.data
	})}
export function getTagsByIdFromWcVProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products/tags/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postTagsByIdFromWcVProducts(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products/tags/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteTagsByIdFromWcVProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products/tags/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcVProductsTags(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products/tags/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getProductsFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postProductsFromWcV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products`,method:'post',}).then(res => {
		return res.data
	})}
export function getProductsByIdFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postProductsByIdFromWcV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteProductsByIdFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcVProducts(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getVariationsFromWcVProductsByProductid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products/${product_id}/variations`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postVariationsFromWcVProductsByProductid(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products/${product_id}/variations`,method:'post',}).then(res => {
		return res.data
	})}
export function getVariationsByIdFromWcVProductsByProductid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products/${product_id}/variations/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postVariationsByIdFromWcVProductsByProductid(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products/${product_id}/variations/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteVariationsByIdFromWcVProductsByProductid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products/${product_id}/variations/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcVProductsByProductidVariations(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/products/${product_id}/variations/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getSalesFromWcVReports(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/reports/sales`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getTopsellersFromWcVReports(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/reports/top_sellers`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getTotalsFromWcVReportsOrders(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/reports/orders/totals`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getTotalsFromWcVReportsProducts(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/reports/products/totals`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getTotalsFromWcVReportsCustomers(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/reports/customers/totals`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getTotalsFromWcVReportsCoupons(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/reports/coupons/totals`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getTotalsFromWcVReportsReviews(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/reports/reviews/totals`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getReportsFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/reports`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getSettingsFromWcV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/settings`,method:'get',}).then(res => {
		return res.data
	})}
export function postBatchFromWcVSettings(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/settings/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getSettingsByGroupidFromWcV(group_id,params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/settings/${group_id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcVSettingsByGroupid(group_id,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/settings/${group_id}/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getSettingsByGroupidByIdFromWcV(group_id,params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/settings/${group_id}/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postSettingsByGroupidByIdFromWcV(group_id,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/settings/${group_id}/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function getZonesFromWcVShipping(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/shipping/zones`,method:'get',}).then(res => {
		return res.data
	})}
export function postZonesFromWcVShipping(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/shipping/zones`,method:'post',}).then(res => {
		return res.data
	})}
export function getZonesByIdFromWcVShipping(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/shipping/zones/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postZonesByIdFromWcVShipping(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/shipping/zones/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteZonesByIdFromWcVShipping(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/shipping/zones/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function getLocationsFromWcVShippingZonesById(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/shipping/zones/${id}/locations`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postLocationsFromWcVShippingZonesById(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/shipping/zones/${id}/locations`,method:'post',}).then(res => {
		return res.data
	})}
export function getMethodsFromWcVShippingZonesByZoneid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/shipping/zones/${zone_id}/methods`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postMethodsFromWcVShippingZonesByZoneid(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/shipping/zones/${zone_id}/methods`,method:'post',}).then(res => {
		return res.data
	})}
export function getMethodsByInstanceidFromWcVShippingZonesByZoneid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/shipping/zones/${zone_id}/methods/${instance_id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postMethodsByInstanceidFromWcVShippingZonesByZoneid(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/shipping/zones/${zone_id}/methods/${instance_id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteMethodsByInstanceidFromWcVShippingZonesByZoneid(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/shipping/zones/${zone_id}/methods/${instance_id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function getClassesFromWcVTaxes(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/taxes/classes`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postClassesFromWcVTaxes(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/taxes/classes`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteClassesBySlugFromWcVTaxes(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/taxes/classes/${slug}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function getTaxesFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/taxes`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postTaxesFromWcV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/taxes`,method:'post',}).then(res => {
		return res.data
	})}
export function getTaxesByIdFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/taxes/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postTaxesByIdFromWcV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/taxes/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteTaxesByIdFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/taxes/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcVTaxes(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/taxes/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getWebhooksFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/webhooks`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postWebhooksFromWcV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/webhooks`,method:'post',}).then(res => {
		return res.data
	})}
export function getWebhooksByIdFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/webhooks/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postWebhooksByIdFromWcV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/webhooks/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteWebhooksByIdFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/webhooks/${id}`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function postBatchFromWcVWebhooks(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/webhooks/batch`,method:'post',}).then(res => {
		return res.data
	})}
export function getSystemstatusFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/system_status`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getToolsFromWcVSystemstatus(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/system_status/tools`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getToolsByIdFromWcVSystemstatus(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/system_status/tools/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postToolsByIdFromWcVSystemstatus(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/system_status/tools/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function getShippingmethodsFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/shipping_methods`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getShippingmethodsByIdFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/shipping_methods/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getPaymentgatewaysFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/payment_gateways`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getPaymentgatewaysByIdFromWcV(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/payment_gateways/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postPaymentgatewaysByIdFromWcV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/payment_gateways/${id}`,method:'post',}).then(res => {
		return res.data
	})}
export function getDataFromWcV(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/data`,method:'get',}).then(res => {
		return res.data
	})}
export function getContinentsFromWcVData(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/data/continents`,method:'get',}).then(res => {
		return res.data
	})}
export function getContinentsByLocationFromWcVData(location,params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/data/continents/${location}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getCountriesFromWcVData(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/data/countries`,method:'get',}).then(res => {
		return res.data
	})}
export function getCountriesByLocationFromWcVData(params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/data/countries/${location}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getCurrenciesFromWcVData(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/data/currencies`,method:'get',}).then(res => {
		return res.data
	})}
export function getCurrentFromWcVDataCurrencies(){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/data/currencies/current`,method:'get',}).then(res => {
		return res.data
	})}
export function getCurrenciesByCurrencyFromWcVData(currency,params,){
 return request({url: `http://ahmedseoudipro.site/wp-json/wc/v3/data/currencies/${currency}`,method:'get',params,}).then(res => {
		return res.data
	})}
