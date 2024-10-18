###

An example how you might display different types of content servcd out of
pocketbase. It requests via the API then displays as AST, HTML, or text.

Compare this with the edit pages screen and pocketbase.

Edit

+ pathname
+ title
+ blocks = editor.js AST
+ code
+ text
+ wysiwyg
+ markdown

###

import isNil from "lodash/isNil"
import get from "lodash/get"
import urlJoin from "url-join"
import { hasContent } from "../../lib/strings"
import { getPage } from "../_pocketbase"

const blankArticle = {
	pathname: ""
	title: ""
	blocks: null
	code: null
	text: null
	wysiwyg: null
	markdown: null
	icon: null
}

export default tag PocketbasePage
	prop locals = {}
	static def GET req, res, next
		const { slug } = req.params
		const pathname = urlJoin "/pocketbase", slug
		const apiRes = await getPage pathname
		let article = get apiRes, "body.items.0"
		if isNil(article) and apiRes.text.startsWith('\{"page":')
			# there's an odd case where it wont parse the response so we do it
			const apiText = try JSON.parse apiRes.text
			article = get apiText, "items.0"
		res.locals.article = article
		next!
	get article
		get(locals, "article", blankArticle)
	<self>
		<h1> article.title
		<div innerHTML=article.body>
