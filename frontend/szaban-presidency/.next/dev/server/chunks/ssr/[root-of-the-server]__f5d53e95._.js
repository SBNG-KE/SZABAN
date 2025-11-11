module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/PresidentialDashboard.tsx
__turbopack_context__.s([
    "default",
    ()=>PresidentialDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/szaban/frontend/szaban-presidency/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/szaban/frontend/szaban-presidency/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function PresidentialDashboard() {
    const [countries, setCountries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedAction, setSelectedAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [targetCountry, setTargetCountry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const fetchGameState = async ()=>{
        try {
            const response = await fetch('http://localhost:8000/game-state');
            if (!response.ok) throw new Error('Failed to fetch');
            const data = await response.json();
            setCountries(data.countries || []);
        } catch (error) {
            console.error('Error fetching game state:', error);
            setCountries([]);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // eslint-disable-next-line react-hooks/set-state-in-effect
        fetchGameState();
    }, []);
    const executePresidentialAction = async (action)=>{
        await fetch('http://localhost:8000/president/action', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                action_type: action,
                target_country: targetCountry,
                details: {}
            })
        });
        fetchGameState();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "presidential-dashboard",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Office of the President - SZABAN"
            }, void 0, false, {
                fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "country-rankings",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Global Power Rankings"
                    }, void 0, false, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "Rank"
                                        }, void 0, false, {
                                            fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "Country"
                                        }, void 0, false, {
                                            fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "GDP ($)"
                                        }, void 0, false, {
                                            fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "Military Power"
                                        }, void 0, false, {
                                            fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "Nuclear Arsenal"
                                        }, void 0, false, {
                                            fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: countries.sort((a, b)=>b.gdp - a.gdp).map((country, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: country.name === 'SZABAN' ? 'our-country' : '',
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: index + 1
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                                lineNumber: 67,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: country.name
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                                lineNumber: 68,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: [
                                                    "$",
                                                    country.gdp.toLocaleString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                                lineNumber: 69,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: country.military_strength
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                                lineNumber: 70,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: country.nuclear_arsenal
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                                lineNumber: 71,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, country.id, true, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "presidential-actions",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Presidential Actions"
                    }, void 0, false, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        onChange: (e)=>setTargetCountry(e.target.value),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "Select Target Country"
                            }, void 0, false, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            countries.filter((c)=>c.name !== 'SZABAN').map((country)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: country.name,
                                    children: country.name
                                }, country.id, false, {
                                    fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "action-buttons",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>executePresidentialAction('trade_sanctions'),
                                children: "Impose Trade Sanctions"
                            }, void 0, false, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>executePresidentialAction('military_exercises'),
                                children: "Conduct Military Exercises"
                            }, void 0, false, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>executePresidentialAction('diplomacy'),
                                children: "Initiate Diplomacy"
                            }, void 0, false, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>executePresidentialAction('intelligence_gathering'),
                                children: "Gather Intelligence"
                            }, void 0, false, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
}),
"[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/EconomicWarfare.tsx
__turbopack_context__.s([
    "default",
    ()=>EconomicWarfare
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/szaban/frontend/szaban-presidency/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/szaban/frontend/szaban-presidency/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function EconomicWarfare({ countries }) {
    const [selectedCountry, setSelectedCountry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [sanctionType, setSanctionType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('trade');
    const [sanctionStrength, setSanctionStrength] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(50);
    const [activeSanctions, setActiveSanctions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [espionageTarget, setEspionageTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [espionageResults, setEspionageResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const targetCountries = countries.filter((country)=>country.name !== 'SZABAN');
    const imposeSanctions = async ()=>{
        if (!selectedCountry) return;
        const sanction = {
            type: sanctionType,
            target: selectedCountry,
            strength: sanctionStrength,
            duration: 12 // months
        };
        try {
            const response = await fetch('http://localhost:8000/economic/sanctions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    target_country: selectedCountry,
                    sanction_type: sanctionType,
                    strength: sanctionStrength
                })
            });
            if (response.ok) {
                setActiveSanctions((prev)=>[
                        ...prev,
                        sanction
                    ]);
                alert(`Sanctions imposed on ${selectedCountry}`);
            }
        } catch (error) {
            console.error('Error imposing sanctions:', error);
        }
    };
    const conductEconomicEspionage = async ()=>{
        if (!espionageTarget) return;
        try {
            const response = await fetch('http://localhost:8000/economic/espionage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    target_country: espionageTarget
                })
            });
            const data = await response.json();
            setEspionageResults(data.report);
        } catch (error) {
            console.error('Error conducting espionage:', error);
        }
    };
    const liftSanctions = (target)=>{
        setActiveSanctions((prev)=>prev.filter((s)=>s.target !== target));
    // API call to lift sanctions would go here
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "economic-warfare",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "warfare-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "💰 Economic Warfare Command"
                    }, void 0, false, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Strategic economic operations to maintain SZABANs dominance"
                    }, void 0, false, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "warfare-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "action-panel sanctions-panel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "⚡ Economic Sanctions"
                            }, void 0, false, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: "Target Country:"
                                    }, void 0, false, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: selectedCountry,
                                        onChange: (e)=>setSelectedCountry(e.target.value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "Select target country"
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                                lineNumber: 111,
                                                columnNumber: 15
                                            }, this),
                                            targetCountries.map((country)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: country.name,
                                                    children: [
                                                        country.name,
                                                        " (GDP: $",
                                                        (country.gdp / 1e9).toFixed(1),
                                                        "B)"
                                                    ]
                                                }, country.id, true, {
                                                    fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: "Sanction Type:"
                                    }, void 0, false, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: sanctionType,
                                        onChange: (e)=>setSanctionType(e.target.value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "trade",
                                                children: "Trade Embargo"
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                                lineNumber: 126,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "financial",
                                                children: "Financial Sanctions"
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                                lineNumber: 127,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "technology",
                                                children: "Technology Export Ban"
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                                lineNumber: 128,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "energy",
                                                children: "Energy Sanctions"
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                                lineNumber: 129,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "Sanction Strength: ",
                                            sanctionStrength,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        min: "10",
                                        max: "100",
                                        value: sanctionStrength,
                                        onChange: (e)=>setSanctionStrength(Number(e.target.value))
                                    }, void 0, false, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                        lineNumber: 135,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn-sanctions",
                                onClick: imposeSanctions,
                                disabled: !selectedCountry,
                                children: "🚫 Impose Sanctions"
                            }, void 0, false, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "action-panel espionage-panel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "🕵️ Economic Espionage"
                            }, void 0, false, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: "Espionage Target:"
                                    }, void 0, false, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: espionageTarget,
                                        onChange: (e)=>setEspionageTarget(e.target.value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "Select target for intelligence"
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                                lineNumber: 163,
                                                columnNumber: 15
                                            }, this),
                                            targetCountries.map((country)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: country.name,
                                                    children: country.name
                                                }, country.id, false, {
                                                    fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn-espionage",
                                onClick: conductEconomicEspionage,
                                disabled: !espionageTarget,
                                children: "🔍 Conduct Economic Espionage"
                            }, void 0, false, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this),
                            espionageResults && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "espionage-results",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        children: "Espionage Report:"
                                    }, void 0, false, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: espionageResults
                                    }, void 0, false, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                        lineNumber: 183,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "action-panel active-sanctions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "📋 Active Sanctions"
                            }, void 0, false, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this),
                            activeSanctions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "No active sanctions"
                            }, void 0, false, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                lineNumber: 192,
                                columnNumber: 13
                            }, this) : activeSanctions.map((sanction, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sanction-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "sanction-info",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: sanction.target
                                                }, void 0, false, {
                                                    fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "Type: ",
                                                        sanction.type
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "Strength: ",
                                                        sanction.strength,
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                            lineNumber: 196,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn-lift",
                                            onClick: ()=>liftSanctions(sanction.target),
                                            children: "Lift"
                                        }, void 0, false, {
                                            fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                            lineNumber: 201,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                    lineNumber: 195,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "action-panel economic-intel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "📊 Economic Intelligence"
                            }, void 0, false, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                lineNumber: 214,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "intel-grid",
                                children: targetCountries.map((country)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "country-intel",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                children: country.name
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                                lineNumber: 218,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    "GDP: $",
                                                    (country.gdp / 1e9).toFixed(1),
                                                    "B"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                                lineNumber: 219,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    "Growth: ",
                                                    country.gdp_growth_rate.toFixed(1),
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                                lineNumber: 220,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    "Resources: Oil: ",
                                                    country.resources.oil,
                                                    " | Food: ",
                                                    country.resources.food
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                                lineNumber: 221,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, country.id, true, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                        lineNumber: 217,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                lineNumber: 215,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                        lineNumber: 213,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
}),
"[project]/szaban/frontend/szaban-presidency/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/page.tsx
__turbopack_context__.s([
    "default",
    ()=>PresidentialOffice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/szaban/frontend/szaban-presidency/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/szaban/frontend/szaban-presidency/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$components$2f$PresidentialDashboard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$components$2f$EconomicWarfare$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function PresidentialOffice() {
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('dashboard');
    const [countries, setCountries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [szabanData, setSzabanData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // eslint-disable-next-line react-hooks/immutability
        fetchGameState();
        const interval = setInterval(fetchGameState, 10000); // Update every 10 seconds
        return ()=>clearInterval(interval);
    }, []);
    const fetchGameState = async ()=>{
        try {
            const response = await fetch('http://localhost:8000/game-state');
            const data = await response.json();
            setCountries(data.countries);
            const szaban = data.countries.find((c)=>c.name === 'SZABAN');
            setSzabanData(szaban);
        } catch (error) {
            console.error('Error fetching game state:', error);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "presidential-office",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "presidential-header",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "header-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: "🇸🇿 Office of the President - Republic of SZABAN"
                        }, void 0, false, {
                            fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "president-status",
                            children: szabanData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "status-cards",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "status-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "label",
                                                children: "GDP Rank:"
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                                                lineNumber: 61,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "value",
                                                children: [
                                                    "#",
                                                    countries.sort((a, b)=>b.gdp - a.gdp).findIndex((c)=>c.name === 'SZABAN') + 1
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                                                lineNumber: 62,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                                        lineNumber: 60,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "status-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "label",
                                                children: "Military Power:"
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                                                lineNumber: 67,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "value",
                                                children: szabanData.military_strength
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                                                lineNumber: 68,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                                        lineNumber: 66,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "status-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "label",
                                                children: "Nuclear Arsenal:"
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                                                lineNumber: 71,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "value",
                                                children: szabanData.nuclear_arsenal
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                                                lineNumber: 72,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                                        lineNumber: 70,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                                lineNumber: 59,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "presidential-tabs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `tab ${activeTab === 'dashboard' ? 'active' : ''}`,
                        onClick: ()=>setActiveTab('dashboard'),
                        children: "🏛️ Dashboard"
                    }, void 0, false, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                        lineNumber: 83,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `tab ${activeTab === 'economic' ? 'active' : ''}`,
                        onClick: ()=>setActiveTab('economic'),
                        children: "💰 Economic"
                    }, void 0, false, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                        lineNumber: 86,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `tab ${activeTab === 'military' ? 'active' : ''}`,
                        onClick: ()=>setActiveTab('military'),
                        children: "⚔️ Military"
                    }, void 0, false, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                        lineNumber: 89,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `tab ${activeTab === 'diplomacy' ? 'active' : ''}`,
                        onClick: ()=>setActiveTab('diplomacy'),
                        children: "🤝 Diplomacy"
                    }, void 0, false, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                        lineNumber: 92,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `tab ${activeTab === 'internal' ? 'active' : ''}`,
                        onClick: ()=>setActiveTab('internal'),
                        children: "🏛️ Internal"
                    }, void 0, false, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                        lineNumber: 95,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `tab ${activeTab === 'crisis' ? 'active' : ''}`,
                        onClick: ()=>setActiveTab('crisis'),
                        children: "🚨 Crisis"
                    }, void 0, false, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                        lineNumber: 98,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `tab ${activeTab === 'intelligence' ? 'active' : ''}`,
                        onClick: ()=>setActiveTab('intelligence'),
                        children: "🕵️ Intelligence"
                    }, void 0, false, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                        lineNumber: 101,
                        columnNumber: 3
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                lineNumber: 82,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "presidential-main",
                children: [
                    activeTab === 'dashboard' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$components$2f$PresidentialDashboard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                        lineNumber: 108,
                        columnNumber: 33
                    }, this),
                    activeTab === 'economic' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$components$2f$EconomicWarfare$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        countries: countries
                    }, void 0, false, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                        lineNumber: 109,
                        columnNumber: 32
                    }, this),
                    activeTab === 'military' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MilitaryStrategy, {
                        countries: countries
                    }, void 0, false, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                        lineNumber: 110,
                        columnNumber: 32
                    }, this),
                    activeTab === 'diplomacy' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DiplomaticRelations, {
                        countries: countries
                    }, void 0, false, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                        lineNumber: 111,
                        columnNumber: 33
                    }, this),
                    activeTab === 'internal' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InternalAffairs, {
                        countries: countries
                    }, void 0, false, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                        lineNumber: 112,
                        columnNumber: 32
                    }, this),
                    activeTab === 'crisis' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CrisisManagement, {}, void 0, false, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                        lineNumber: 113,
                        columnNumber: 30
                    }, this),
                    activeTab === 'intelligence' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EnhancedIntelligence, {
                        countries: countries
                    }, void 0, false, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                        lineNumber: 114,
                        columnNumber: 36
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "presidential-footer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "🔒 Classified - For Presidential Eyes Only"
                    }, void 0, false, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                        lineNumber: 119,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Secure Terminal Active | Last Updated: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                suppressHydrationWarning: true,
                                children: new Date().toLocaleTimeString()
                            }, void 0, false, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                                lineNumber: 120,
                                columnNumber: 45
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                        lineNumber: 120,
                        columnNumber: 3
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                lineNumber: 118,
                columnNumber: 1
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
}),
"[project]/szaban/frontend/szaban-presidency/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/szaban/frontend/szaban-presidency/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/szaban/frontend/szaban-presidency/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/szaban/frontend/szaban-presidency/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/szaban/frontend/szaban-presidency/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f5d53e95._.js.map