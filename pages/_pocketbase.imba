###

This is a function used by ./api.imba and ./pocketbase/[slug].imba. It requests
to the pocketbase API for a single page queried by it's `pathname`.

###

import urlJoin from "url-join"
import get from "lodash/get"
import { isNode } from "../lib/environment"
import { hasContent } from "../lib/strings"
import superagent from "superagent"

const pocketbaseUrl = isNode ? "http://pocketbase:8090/api/collections/gwigqbevn82hufd/records" : "/api"

export def getPage pathname
	let query
	if isNode
		# server queries pocketbase directly
		const filter = escape("pathname = '{pathname}'")
		query = "?page=1&perPage=1&filter={filter}"
	else
		# client queries to /api proxy
		query = "?pathname={pathname}"
	superagent.get("{pocketbaseUrl}{query}").accept("json")
