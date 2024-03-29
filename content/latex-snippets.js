[
	// Math mode
    {trigger: "$", replacement: "$$0$", options: "tA"},
    {trigger: "$", replacement: "$\n$0\n$", options: "mA"},
    {trigger: "([^'])\\b([a-zA-Z])\\b([=+-/])", replacement: "[[0]]$[[1]][[2]]$0$", options: "rtA", description: "Automatically enter inline math mode with <letter><symbol>", priority: -1},
    {trigger: "([^'])\\b([a-zA-Z])([_^])", replacement: "[[0]]$[[1]][[2]]{$0}$1$", options: "rtA", description: "Automatically enter inline math mode with <letter><symbol>", priority: -1},
	{trigger: "EE", replacement: "$\\exists$", options: "tA", priority: 1},
	{trigger: "AA", replacement: "$\\forall$", options: "tA", priority: 1},

	// Environments
	{trigger: "beg", replacement: "\\begin{$0}\n$1\n\\end{$0}", options: "mA"},
	{trigger: "pmat", replacement: "\\begin{pmatrix}\n$0\n\\end{pmatrix}", options: "mA"},
	{trigger: "bmat", replacement: "\\begin{bmatrix}\n$0\n\\end{bmatrix}", options: "mA"},
	{trigger: "Bmat", replacement: "\\begin{Bmatrix}\n$0\n\\end{Bmatrix}", options: "mA"},
	{trigger: "vmat", replacement: "\\begin{vmatrix}\n$0\n\\end{vmatrix}", options: "mA"},
	{trigger: "Vmat", replacement: "\\begin{Vmatrix}\n$0\n\\end{Vmatrix}", options: "mA"},
	{trigger: "case", replacement: "\\begin{cases}\n$0\n\\end{cases}", options: "mA"},
	{trigger: "align", replacement: "\\begin{align}\n$0\n\\end{align}", options: "mA"},
	{trigger: "array", replacement: "\\begin{array}{${0:c}}\n$1\n\\end{array}", options: "mA"},
	{trigger: "matrix", replacement: "\\begin{matrix}\n$0\n\\end{matrix}", options: "mA"},

	// Visual operations
    {trigger: "A", replacement: "\\begin{align}\n${VISUAL}\n\\end{align}", options: "mA", description: "Align visual"},
    {trigger: "C", replacement: "\\begin{cases}\n${VISUAL}\n\\end{cases}", options: "mA", description: "Align visual"},
    {trigger: "B", replacement: "\\boxed{${VISUAL}}", options: "mA", description: "Box selection"},
	{trigger: "U", replacement: "\\underbrace{ ${VISUAL} }_{ $0 }", options: "mA"},
	{trigger: "O", replacement: "\\overbrace{ ${VISUAL} }^{ $0 }", options: "mA"},
	{trigger: "K", replacement: "\\overset{ $0 }{ ${VISUAL} }", options: "mA"},
	{trigger: "J", replacement: "\\underset{ $0 }{ ${VISUAL} }", options: "mA"},
	{trigger: "X", replacement: "\\cancel{ ${VISUAL} }", options: "mA"},
	{trigger: "Z", replacement: "\\cancelto{ $0 }{ ${VISUAL} }", options: "mA"},
	{trigger: "S", replacement: "\\sqrt{ ${VISUAL} }", options: "mA"},

	// Greek letters
	{trigger: "@a", replacement: "\\alpha", options: "mA"},
	{trigger: "@A", replacement: "\\alpha", options: "mA"},
	{trigger: "@b", replacement: "\\beta", options: "mA"},
	{trigger: "@B", replacement: "\\beta", options: "mA"},
	{trigger: "@c", replacement: "\\chi", options: "mA"},
	{trigger: "@C", replacement: "\\chi", options: "mA"},
	{trigger: "@g", replacement: "\\gamma", options: "mA"},
	{trigger: "@G", replacement: "\\Gamma", options: "mA"},
	{trigger: "@d", replacement: "\\delta", options: "mA"},
	{trigger: "@D", replacement: "\\Delta", options: "mA"},
	{trigger: "@e", replacement: "\\epsilon", options: "mA"},
	{trigger: "@E", replacement: "\\epsilon", options: "mA"},
	{trigger: "@z", replacement: "\\zeta", options: "mA"},
	{trigger: "@Z", replacement: "\\zeta", options: "mA"},
	{trigger: "@t", replacement: "\\theta", options: "mA"},
	{trigger: "@T", replacement: "\\Theta", options: "mA"},
	{trigger: "@k", replacement: "\\kappa", options: "mA"},
	{trigger: "@K", replacement: "\\kappa", options: "mA"},
	{trigger: "@l", replacement: "\\lambda", options: "mA"},
	{trigger: "@L", replacement: "\\Lambda", options: "mA"},
	{trigger: "@m", replacement: "\\mu", options: "mA"},
	{trigger: "@M", replacement: "\\mu", options: "mA"},
	{trigger: "@r", replacement: "\\rho", options: "mA"},
	{trigger: "@R", replacement: "\\rho", options: "mA"},
	{trigger: "@s", replacement: "\\sigma", options: "mA"},
	{trigger: "@S", replacement: "\\Sigma", options: "mA"},
	{trigger: "@o", replacement: "\\omega", options: "mA"},
	{trigger: "@O", replacement: "\\Omega", options: "mA"},
	{trigger: "@u", replacement: "\\upsilon", options: "mA"},
	{trigger: "@U", replacement: "\\Upsilon", options: "mA"},
	{trigger: "([^\\\\])(${GREEK})", replacement: "[[0]]\\[[1]]", options: "rmA", description: "Add backslash before greek letters"},
	{trigger: "\\\\(${GREEK})([A-Za-z])", replacement: "\\[[0]] [[1]]", options: "rmA", description: "Add space after greek letters"},

    // character mods
	{trigger: "\\\\(${GREEK}) hat", replacement: "\\hat{\\[[0]]}", options: "rmA"},
	{trigger: "\\\\(${GREEK}) dot", replacement: "\\dot{\\[[0]]}", options: "rmA"},
	{trigger: "\\\\(${GREEK}) bar", replacement: "\\bar{\\[[0]]}", options: "rmA"},
	{trigger: "\\\\(${GREEK}) vec", replacement: "\\vec{\\[[0]]}", options: "rmA"},
	{trigger: "\\\\(${GREEK}) tilde", replacement: "\\tilde{\\[[0]]}", options: "rmA"},
	{trigger: "\\\\(${GREEK}) und", replacement: "\\underline{\\[[0]]}", options: "rmA"},
	{trigger: "\\\\(${GREEK}),\\.", replacement: "\\boldsymbol{\\[[0]]}", options: "rmA"},
	{trigger: "\\\\(${GREEK})\\.,", replacement: "\\boldsymbol{\\[[0]]}", options: "rmA"},
	{trigger: "([a-zA-Z])bar", replacement: "\\bar{[[0]]}", options: "rmA"},
	{trigger: "([a-zA-Z])hat", replacement: "\\hat{[[0]]}", options: "rmA"},
	{trigger: "([a-zA-Z])ddot", replacement: "\\ddot{[[0]]}", options: "rmA", priority: 3},
	{trigger: "([a-bd-zA-Z])dot", replacement: "\\dot{[[0]]}", options: "rmA", priority: 1},
	{trigger: "([a-zA-Z])vec", replacement: "\\vec{[[0]]}", options: "rmA"},
	{trigger: "([a-zA-Z])tilde", replacement: "\\tilde{[[0]]}", options: "rmA"},
	{trigger: "([a-zA-Z])und", replacement: "\\underline{[[0]]}", options: "rmA"},
	{trigger: "bar", replacement: "\\bar{$0}$1", options: "mA"},
	{trigger: "hat", replacement: "\\hat{$0}$1", options: "mA"},
	{trigger: "box", replacement: "\\boxed{$0}$1", options: "mA"},
	{trigger: "dot", replacement: "\\dot{$0}$1", options: "mA"},
	{trigger: "ddot", replacement: "\\ddot{$0}$1", options: "mA", priority: 2},
	{trigger: "vec", replacement: "\\vec{$0}$1", options: "mA"},
	{trigger: "tilde", replacement: "\\tilde{$0}$1", options: "mA"},
	{trigger: "und", replacement: "\\underline{$0}$1", options: "mA"},
    {trigger: "Vec", replacement: "\\{${0:x}_{1},${0:x}_{2},\\dots,${0:x}_{${1:n}}\\}$2", options: "mA"},

	// Operations
	{trigger: "txt", replacement: "\\text{$0}$1", options: "mA", priority: -1},
    {trigger: "([^\\\\])text", replacement: "[[0]]\\text{$0}$1", options: "rmA"},
	{trigger: "stxt|stext", replacement: "_\\text{$0}", options: "rmA"},
	{trigger: "^", replacement: "^{$0}$1", options: "mA"},
	{trigger: "_", replacement: "_{$0}$1", options: "mA"},
	{trigger: "sq", replacement: "\\sqrt{ $0 }$1", options: "mA"},
	{trigger: "//", replacement: "\\frac{$0}{$1}$2", options: "mA"},
	{trigger: "conj", replacement: "^{*}", options: "mA"},
	{trigger: "trans", replacement: "^{\\top}", options: "mA"},
	{trigger: "invs", replacement: "^{-1}", options: "mA"},
	{trigger: "\\inv", replacement: "^{-1}", options: "mA", priority: 2},
	{trigger: "trace", replacement: "\\operatorname{Tr}", options: "mA"},
    {trigger: "max", replacement: "\\max", options: "mA", priority: -1},
    {trigger: "\\max_", replacement: "\\max\\limits_{$0}$1", options: "mA", priority: 1},
    {trigger: "argmax", replacement: "\\operatorname{argmax}", options: "mA"},
    {trigger: "\\operatorname{argmax}_", replacement: "\\underset{$0}{\\operatorname{argmax}}$1", options: "mA"},
    {trigger: "min", replacement: "\\min", options: "mA", priority: -1},
    {trigger: "\\min_", replacement: "\\min\\limits_{$0}$1", options: "mA", priority: 1},
    {trigger: "argmin", replacement: "\\operatorname{argmin}", options: "mA"},
    {trigger: "\\operatorname{argmin}_", replacement: "\\underset{$0}{\\operatorname{argmin}}$1", options: "mA"},
	{trigger: "([^\\\\])(det|max|min)([A-Za-z])", replacement: "[[0]]\\[[1]]", options: "rmA"},
	{trigger: "\\\\(det|max|min)([A-Za-z])", replacement: "\\[[0]] [[1]]", options: "rmA"},

	{trigger: "([a-zA-Z]),\\.", replacement: "\\mathbf{[[0]]}", options: "rmA"},
	{trigger: "([a-zA-Z])\\.,", replacement: "\\mathbf{[[0]]}", options: "rmA"},

    // Auto subscript numbers
	{trigger: "([A-Za-z])(\\d)", replacement: "[[0]]_{[[1]]}", options: "rmA", description: "Auto letter subscript", priority: -1},
	{trigger: "([A-Za-z])_{(\\d+)}(\\d)", replacement: "[[0]]_{[[1]][[2]]}", options: "rmA"},
	{trigger: "\\hat{([A-Za-z])}(\\d)", replacement: "hat{[[0]]}_{[[1]]}", options: "rmA"},
	{trigger: "\\\\mathbf{([A-Za-z])}(\\d)", replacement: "\\mathbf{[[0]]}_{[[1]]}", options: "rmA"},
	{trigger: "\\\\vec{([A-Za-z])}(\\d)", replacement: "\\vec{[[0]]}_{[[1]]}", options: "rmA"},

    // Trig
	{trigger: "([^\\\\])(arcsin|arccos|arctan|arccot|arccsc|arcsec|sin|cos|tan|cot|csc|sec)", replacement: "[[0]]\\[[1]]", options: "rmA"},
	{trigger: "\\\\(arcsin|arccos|arctan|arccot|arccsc|arcsec|sin|cos|tan|cot|csc|sec)([A-Za-gi-z])", replacement: "\\[[0]] [[1]]", options: "rmA"},
	{trigger: "\\\\(arcsinh|arccosh|arctanh|arccoth|arcsch|arcsech|sinh|cosh|tanh|coth|csch|sech)([A-Za-z])", replacement: "\\[[0]] [[1]]", options: "rmA"},
	{trigger: "\\\\(arcsinh|arccosh|arctanh|arccoth|arcsch|arcsech|sinh|cosh|tanh|coth|csch|sech)([0-9])", replacement: "\\[[0]][[1]]", options: "rmA"},

    // Logic
	{trigger: "!=", replacement: "\\neq ", options: "mA"},
	{trigger: ">=", replacement: "\\geq ", options: "mA"},
	{trigger: "<=", replacement: "\\leq ", options: "mA"},
	{trigger: ">>", replacement: "\\gg", options: "mA"},
	{trigger: "<<", replacement: "\\ll", options: "mA"},
	{trigger: "~~", replacement: "\\sim", options: "mA"},
	{trigger: "\\sim~", replacement: "\\approx", options: "mA"},
	{trigger: "\\sim=", replacement: "\\simeq", options: "mA"},
	{trigger: "\\sim<", replacement: "\\lesssim", options: "mA"},
    {trigger: "vand", replacement: "\\wedge", options: "mA"},
    {trigger: "vorr", replacement: "\\vee", options: "mA"},
    {trigger: "Vand", replacement: "\\bigwedge", options: "mA"},
    {trigger: "Vorr", replacement: "\\bigvee", options: "mA"},
    {trigger: "([^\\\\])(neq|geq|leq|gg|ll|sim|approx|simeq|lesssim|wedge|vee|bigwedge|bigvee)", replacement: "\\[[0]] [[1]]", options: "rmA"},
	{trigger: "\\\\(neq|geq|leq|gg|ll|sim|approx|simeq|lesssim|wedge|vee|bigwedge|bigvee)([A-Za-z])", replacement: "\\[[0]] [[1]]", options: "rmA"},
	{trigger: "\\\\(neq|geq|leq|gg|ll|sim|approx|simeq|lesssim|wedge|vee|bigwedge|bigvee)([0-9])", replacement: "\\[[0]][[1]]", options: "rmA"},

    // Arrows
	{trigger: "<-", replacement: "\\leftarrow ", options: "mA"},
	{trigger: "\\leftarrow >", replacement: "\\leftrightarrow ", options: "mA"},
	{trigger: "\\leq =", replacement: "\\Leftarrow ", options: "mA"},
	{trigger: "\\Leftarrow =", replacement: "\\impliedby ", options: "mA"},
	{trigger: "\\Leftarrow >", replacement: "\\Leftrightarrow ", options: "mA"},
	{trigger: "\\impliedby >", replacement: "\\iff ", options: "mA"},
	{trigger: "iff", replacement: "\\iff", options: "mA"},
	{trigger: "->", replacement: "\\to ", options: "mA"},
	{trigger: "=>", replacement: "\\Rightarrow ", options: "mA"},
	{trigger: "==>", replacement: "\\implies ", options: "mA"},
	{trigger: "~>", replacement: "\\leadsto ", options: "mA"},
    {trigger: "([^\\\\])(leftarrow|leftrightarrow|Leftarrow|impliedby|Leftrightarrow|iff|to|rightarrow|Rightarrow|implies|leadsto)", replacement: "[[0]]\\[[1]]", options: "rmA"},
    {trigger: "\\\\(leftarrow|leftrightarrow|Leftarrow|impliedby|Leftrightarrow|iff|to|rightarrow|Rightarrow|implies|leadsto)([A-Za-z])", replacement: "\\[[0]] [[1]]", options: "rmA"},
    {trigger: "\\\\(leftarrow|leftrightarrow|Leftarrow|impliedby|Leftrightarrow|iff|to|rightarrow|Rightarrow|implies|leadsto)([0-9])", replacement: "\\[[0]][[1]]", options: "rmA"},

    // Set Theory
	{trigger: "set", replacement: "\\{ $0 \\}$1", options: "m"},
	{trigger: "eset", replacement: "\\emptyset", options: "mA"},
	{trigger: "===", replacement: "\\equiv", options: "mA"},
	{trigger: "\\-", replacement: "\\setminus", options: "mA"},
	{trigger: "notin", replacement: "\\not\\in", options: "mA", priority: 1},
	{trigger: "notni", replacement: "\\not\\ni", options: "mA", priority: 1},
	{trigger: "\\inf", replacement: "\\infty", options: "mA", priority: 1},
	{trigger: "\\subset eq", replacement: "\\subseteq", options: "mA"},
	{trigger: "e\\xi sts", replacement: "\\exists", options: "mA", priority: 1},
	{trigger: "EE", replacement: "\\exists", options: "mA", priority: 1},
	{trigger: "AA", replacement: "\\forall", options: "mA", priority: 1},
	{trigger: "\\xin", replacement: "x\\in", options: "mA", priority: 1},
	{trigger: "\\\\(in|ni|emptyset|equiv|cap|cup|setminus)([A-Za-z])", replacement: "\\[[0]] [[1]]", options: "rmA"},
    {trigger: "uand", replacement: "\\cap ", options: "mA"},
    {trigger: "uorr", replacement: "\\cup ", options: "mA"},
    {trigger: "Uand", replacement: "\\bigcap ", options: "mA"},
    {trigger: "Uorr", replacement: "\\bigcup ", options: "mA"},
    {trigger: "\\\\mathbb{(C|R|Z|N|I)}n", replacement: "\\mathbb{[[0]]}^{n}", options: "rmA"},
    {trigger: "\\\\mathbb{(C|R|Z|N|I)}\\^{n}n", replacement: "\\mathbb{[[0]]}^{n\\times n}", options: "rmA"},
    {trigger: "\\\\mathbb{(C|R|Z|N|I)}\\^{n\\\\times n}n", replacement: "\\mathbb{[[0]]}^{n\\times n\\times n}", options: "rmA"},
	{trigger: "\\\\mathbb{(C|R|Z|N|I)}(\\d)", replacement: "\\mathbb{[[0]]}^{[[1]]}", options: "rmA", description: "Auto number supscript", priority: -1},
	{trigger: "\\\\mathbb{(C|R|Z|N|I)}\\^{(\\d+)}(\\d)", replacement: "\\mathbb{[[0]]}^{[[1]][[2]]}", options: "rmA", priority: -1},
    {trigger: "([^\\\\])(emptyset|equiv|setminus|in|ni|subset|subseteq|exists|forall|cap|cup|bigcap|bigcup)", replacement: "[[0]]\\[[1]]", options: "rmA"},
    {trigger: "\\\\(emptyset|equiv|setminus|in|ni|subset|subseteq|exists|forall|cap|cup|bigcap|bigcup)([A-Za-z])", replacement: "\\[[0]] [[1]]", options: "rmA"},
    {trigger: "\\\\(emptyset|equiv|setminus|in|ni|subset|subseteq|exists|forall|cap|cup|bigcap|bigcup)([0-9])", replacement: "\\[[0]][[1]]", options: "rmA"},

	// Symbols
	{trigger: "sum", replacement: "\\sum\\limits_{ ${0:i} = ${1:0} }^{${2:n}} $3", options: "mA"},
	{trigger: "prod", replacement: "\\prod\\limits_{ ${0:i} = ${1:0} }^{${2:n}} $3", options: "mA"},
	{trigger: "lim", replacement: "\\lim\\limits_{ ${0:n} \\to ${1:\\infty} } $2", options: "mA"},
	{trigger: "([^\\\\])pm", replacement: "[[0]]\\pm", options: "rm"},
	{trigger: "([^\\\\])mp", replacement: "[[0]]\\mp", options: "rm"},
	{trigger: "+-", replacement: "\\pm", options: "mA"},
	{trigger: "-+", replacement: "\\mp", options: "mA"},
	{trigger: "Sq", replacement: "\\square", options: "mA"},
	{trigger: "xx", replacement: "\\times", options: "mA"},
	{trigger: "...", replacement: "\\dots", options: "mA"},
	{trigger: "c..", replacement: "\\cdots", options: "mA"},
	{trigger: "v..", replacement: "\\vdots", options: "mA"},
	{trigger: "d..", replacement: "\\ddots", options: "mA"},
    {trigger: "([^\\\\])(pm|mp|square|nabla|times|dots|cdots|vdots|ddots|cdot|infty|oplus|otimes)", replacement: "[[0]]\\[[1]]", options: "rmA"},
    {trigger: "\\\\(pm|mp|square|nabla|times|dots|cdots|vdots|ddots|cdot|infty|oplus|otimes)([A-Za-z])", replacement: "\\[[0]] [[1]]", options: "rmA"},
    {trigger: "\\\\(pm|mp|square|nabla|times|dots|cdots|vdots|ddots|cdot|infty|oplus|otimes)([0-9])", replacement: "\\[[0]][[1]]", options: "rmA"},

    // Fonts
	{trigger: "mcal", replacement: "\\mathcal{$0}$1", options: "mA"},
	{trigger: "mbb", replacement: "\\mathbb{$0}$1", options: "mA"},
	{trigger: "mbf", replacement: "\\mathbf{$0}$1", options: "mA"},
	{trigger: "mrm", replacement: "\\mathrm{$0}$1", options: "mA"},
	{trigger: "CC", replacement: "\\mathbb{C}", options: "mA"},
	{trigger: "RR", replacement: "\\mathbb{R}", options: "mA"},
	{trigger: "ZZ", replacement: "\\mathbb{Z}", options: "mA"},
	{trigger: "NN", replacement: "\\mathbb{N}", options: "mA"},
	{trigger: "II", replacement: "\\mathbb{1}", options: "mA"},

	// Derivatives
	{trigger: "par", replacement: "\\frac{ \\partial ${0:y} }{ \\partial ${1:x} } $2", options: "m"},
	{trigger: "pa2", replacement: "\\frac{ \\partial^{2} ${0:y} }{ \\partial ${1:x}^{2} } $2", options: "mA"},
	{trigger: "pa3", replacement: "\\frac{ \\partial^{3} ${0:y} }{ \\partial ${1:x}^{3} } $2", options: "mA"},
	{trigger: "pa([A-Za-z])([A-Za-z])", replacement: "\\frac{ \\partial [[0]] }{ \\partial [[1]] } ", options: "rm"},
	{trigger: "pa([A-Za-z])([A-Za-z])([A-Za-z])", replacement: "\\frac{ \\partial^{2} [[0]] }{ \\partial [[1]] \\partial [[2]] } ", options: "rm"},
	{trigger: "pa([A-Za-z])([A-Za-z])2", replacement: "\\frac{ \\partial^{2} [[0]] }{ \\partial [[1]]^{2} } ", options: "rmA"},
	{trigger: "de([A-Za-z])([A-Za-z])", replacement: "\\frac{ d[[0]] }{ d[[1]] } ", options: "rm"},
	{trigger: "de([A-Za-z])([A-Za-z])2", replacement: "\\frac{ d^{2}[[0]] }{ d[[1]]^{2} } ", options: "rmA"},
	{trigger: "ddt", replacement: "\\frac{d}{dt} ", options: "mA"},

	// Integrals
	{trigger: "oinf", replacement: "\\int_{0}^{\\infty} $0 \\, d${1:x} $2", options: "mA"},
	{trigger: "infi", replacement: "\\int_{-\\infty}^{\\infty} $0 \\, d${1:x} $2", options: "mA"},
	{trigger: "dint", replacement: "\\int_{${0:0}}^{${1:\\infty}} $2 \\, d${3:x} $4", options: "mA"},
	{trigger: "oint", replacement: "\\oint", options: "mA"},
	{trigger: "iiint", replacement: "\\iiint", options: "mA"},
	{trigger: "iint", replacement: "\\iint", options: "mA"},
	{trigger: "int", replacement: "\\int $0 \\, d${1:x} $2", options: "mA"},

	// Brackets
	{trigger: "avg", replacement: "\\langle $0 \\rangle $1", options: "mA"},
	{trigger: "norm", replacement: "\\lvert $0 \\rvert $1", options: "mA", priority: 1},
	{trigger: "Norm", replacement: "\\lVert $0 \\rVert $1", options: "mA", priority: 1},
	{trigger: "ceil", replacement: "\\lceil $0 \\rceil $1", options: "mA"},
	{trigger: "floor", replacement: "\\lfloor $0 \\rfloor $1", options: "mA"},
	{trigger: "mod", replacement: "|$0|$1", options: "mA"},
	{trigger: "(", replacement: "(${VISUAL})", options: "mA"},
	{trigger: "[", replacement: "[${VISUAL}]", options: "mA"},
	{trigger: "{", replacement: "{${VISUAL}}", options: "mA"},
	{trigger: "(", replacement: "($0)$1", options: "mA"},
	{trigger: "{", replacement: "{$0}$1", options: "mA"},
	{trigger: "[", replacement: "[$0]$1", options: "mA"},
	{trigger: "lr(", replacement: "\\left( $0 \\right) $1", options: "mA"},
	{trigger: "lr|", replacement: "\\left| $0 \\right| $1", options: "mA"},
	{trigger: "lr{", replacement: "\\left\\{ $0 \\right\\} $1", options: "mA"},
	{trigger: "lr[", replacement: "\\left[ $0 \\right] $1", options: "mA"},
	{trigger: "lr<", replacement: "\\left\\langle $0 \\right\\rangle $1", options: "mA"},

	// Misc
    {trigger: "([^'])\\b((?![aAIieg])[a-zA-Z])\\b([\\n\\s\\.,])", replacement: "[[0]]$[[1]]$[[2]]", options: "rtA", description: "Automatically treat lone characters as math (except a, A, I)"},
    {trigger: "([^'])\\b(${GREEK})\\b([\\n\\s\\.,])", replacement: "[[0]]$\\[[1]]$[[2]]", options: "rtA", description: "Automatically convert greek characters to their symbols"},
    {trigger: "clr", replacement: "\\color{${0:white}}$1", options: "mA", description: "Control math mode color"},
	{trigger: "tayl", replacement: "${0:f}(${1:x} + ${2:h}) = ${0:f}(${1:x}) + ${0:f}'(${1:x})${2:h} + ${0:f}''(${1:x}) \\frac{${2:h}^{2}}{2!} + \\dots$3", options: "mA"},
    {trigger: "eval", replacement: "\\biggr|_{${0:x}=$1}$2", options: "mA"},

    // Matrices
	{trigger: /I_{(\d+)}/, replacement: (match) => {
		const n = match[1];

		let arr = [];
		for (let j = 0; j < n; j++) {
			arr[j] = [];
			for (let i = 0; i < n; i++) {
				arr[j][i] = (i === j) ? 1 : 0;
			}
		}

		let output = arr.map(el => el.join(" & ")).join(" \\\\\n");
		output = `\\begin{bmatrix}\n${output}\n\\end{bmatrix}`;
		return output;
	}, options: "M", description: "N x N identity matrix"},

	{trigger: /U_{(\d+)}/, replacement: (match) => {
		const n = match[1];

		let arr = [];
        let ind = 0;
		for (let j = 0; j < n; j++) {
			arr[j] = [];
			for (let i = 0; i < n; i++) {
                if (i >= j) {
                    arr[j][i] = `\${${ind}:u_{${j + 1}${i + 1}}}`
                    ind = ind + 1;
                } else {
                    arr[j][i] = "0";
                }
			}
		}

		let output = arr.map(el => el.join(" & ")).join(" \\\\\n");
		output = `\\begin{bmatrix}\n${output}\n\\end{bmatrix}\$${ind}`;
		return output;
	}, options: "M", description: "N x N upper triangular matrix"},

	{trigger: /L_{(\d+)}/, replacement: (match) => {
		const n = match[1];

		let arr = [];
        let ind = 0;
		for (let j = 0; j < n; j++) {
			arr[j] = [];
			for (let i = 0; i < n; i++) {
                if (i <= j) {
                    arr[j][i] = `\${${ind}:l_{${j + 1}${i + 1}}}`
                    ind = ind + 1;
                } else {
                    arr[j][i] = "0";
                }
			}
		}

		let output = arr.map(el => el.join(" & ")).join(" \\\\\n");
		output = `\\begin{bmatrix}\n${output}\n\\end{bmatrix}\$${ind}`;
		return output;
	}, options: "M", description: "N x N lower triangular matrix"},

	{trigger: /D_{(\d+)}/, replacement: (match) => {
		const n = match[1];

		let arr = [];
        let ind = 0;
		for (let j = 0; j < n; j++) {
			arr[j] = [];
			for (let i = 0; i < n; i++) {
                if (i === j) {
                    arr[j][i] = `\${${ind}:d_{${j + 1}${i + 1}}}`
                    ind = ind + 1;
                } else {
                    arr[j][i] = "0";
                }
			}
		}

		let output = arr.map(el => el.join(" & ")).join(" \\\\\n");
		output = `\\begin{bmatrix}\n${output}\n\\end{bmatrix}\$${ind}`;
		return output;
	}, options: "M", description: "N x N diagonal matrix"},
]
