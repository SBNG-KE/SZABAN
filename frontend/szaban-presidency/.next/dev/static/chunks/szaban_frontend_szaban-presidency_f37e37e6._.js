(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/PresidentialDashboard.tsx
__turbopack_context__.s([
    "default",
    ()=>PresidentialDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/szaban/frontend/szaban-presidency/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/szaban/frontend/szaban-presidency/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function PresidentialDashboard({ countries }) {
    _s();
    const [targetCountry, setTargetCountry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const safeCountries = countries || [];
    const targetCountries = safeCountries.filter((country)=>country.name !== 'SZABAN');
    const sortedCountries = [
        ...safeCountries
    ].sort((a, b)=>b.gdp - a.gdp);
    const executePresidentialAction = async (action)=>{
        if (!targetCountry) return;
        try {
            const response = await fetch('http://localhost:8000/president/action', {
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
            const data = await response.json();
            setResult(data.result || 'Action completed');
        } catch (error) {
            console.error('Error executing action:', error);
            setResult('Failed to execute action');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold text-white mb-2",
                        children: "Office of the President - SZABAN"
                    }, void 0, false, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400",
                        children: "Global Power Command Center"
                    }, void 0, false, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-800/50 rounded-2xl border border-gray-700 p-6 backdrop-blur-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-yellow-400 mb-6 text-center",
                        children: "🌍 Global Power Rankings"
                    }, void 0, false, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    safeCountries.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto mb-4"
                            }, void 0, false, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400",
                                children: "Loading countries data..."
                            }, void 0, false, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "border-b border-gray-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-left py-4 px-4 text-yellow-400 font-semibold",
                                                children: "Rank"
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                                lineNumber: 67,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-left py-4 px-4 text-yellow-400 font-semibold",
                                                children: "Country"
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                                lineNumber: 68,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-left py-4 px-4 text-yellow-400 font-semibold",
                                                children: "GDP ($)"
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                                lineNumber: 69,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-left py-4 px-4 text-yellow-400 font-semibold",
                                                children: "Military Power"
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                                lineNumber: 70,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-left py-4 px-4 text-yellow-400 font-semibold",
                                                children: "Nuclear Arsenal"
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                                lineNumber: 71,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                        lineNumber: 66,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: sortedCountries.map((country, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: `border-b border-gray-700/50 transition-colors hover:bg-gray-700/30 ${country.name === 'SZABAN' ? 'bg-yellow-500/10 border-l-4 border-l-yellow-500' : ''}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-4 px-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `w-8 h-8 rounded-full flex items-center justify-center font-bold ${index === 0 ? 'bg-yellow-500 text-black' : index === 1 ? 'bg-gray-400 text-black' : index === 2 ? 'bg-orange-500 text-black' : 'bg-gray-600 text-white'}`,
                                                        children: index + 1
                                                    }, void 0, false, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-4 px-4 font-semibold",
                                                    children: [
                                                        country.name === 'SZABAN' ? '🇸🇿 ' : '',
                                                        country.name
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-4 px-4 text-green-400 font-mono",
                                                    children: [
                                                        "$",
                                                        (country.gdp / 1e9).toFixed(1),
                                                        "B"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-4 px-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-24 bg-gray-700 rounded-full h-2 mr-3",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "bg-red-500 h-2 rounded-full",
                                                                    style: {
                                                                        width: `${Math.min(100, country.military_strength)}%`
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                                                    lineNumber: 100,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                                                lineNumber: 99,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-red-400 font-semibold",
                                                                children: country.military_strength
                                                            }, void 0, false, {
                                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                                                lineNumber: 105,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-4 px-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-24 bg-gray-700 rounded-full h-2 mr-3",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "bg-orange-500 h-2 rounded-full",
                                                                    style: {
                                                                        width: `${Math.min(100, country.nuclear_arsenal / 20)}%`
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                                                    lineNumber: 111,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                                                lineNumber: 110,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-orange-400 font-semibold",
                                                                children: country.nuclear_arsenal
                                                            }, void 0, false, {
                                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                                                lineNumber: 116,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, `${country.id}-${index}`, true, {
                                            fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                            lineNumber: 76,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                    lineNumber: 74,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-800/50 rounded-2xl border border-gray-700 p-6 backdrop-blur-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-yellow-400 mb-6 text-center",
                        children: "⚡ Presidential Actions"
                    }, void 0, false, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid lg:grid-cols-2 gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-300 mb-2",
                                                children: "Target Country"
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                                lineNumber: 134,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: targetCountry,
                                                onChange: (e)=>setTargetCountry(e.target.value),
                                                className: "w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        className: "text-gray-400",
                                                        children: "Select Target Country"
                                                    }, void 0, false, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 17
                                                    }, this),
                                                    targetCountries.map((country)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: country.name,
                                                            className: "text-white",
                                                            children: [
                                                                country.name,
                                                                " (Military: ",
                                                                country.military_strength,
                                                                ")"
                                                            ]
                                                        }, country.id, true, {
                                                            fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 19
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                                lineNumber: 135,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                        lineNumber: 133,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>executePresidentialAction('trade_sanctions'),
                                                disabled: !targetCountry,
                                                className: "bg-red-600 hover:bg-red-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100",
                                                children: "🚫 Trade Sanctions"
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                                lineNumber: 150,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>executePresidentialAction('military_exercises'),
                                                disabled: !targetCountry,
                                                className: "bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100",
                                                children: "💪 Military Exercises"
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                                lineNumber: 157,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>executePresidentialAction('diplomacy'),
                                                disabled: !targetCountry,
                                                className: "bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100",
                                                children: "🤝 Initiate Diplomacy"
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                                lineNumber: 164,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>executePresidentialAction('intelligence_gathering'),
                                                disabled: !targetCountry,
                                                className: "bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100",
                                                children: "🕵️ Gather Intelligence"
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                                lineNumber: 171,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-700/50 rounded-xl border border-gray-600 p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-yellow-400 mb-3",
                                        children: "Action Result"
                                    }, void 0, false, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                        lineNumber: 183,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-black/30 rounded-lg p-4 border border-gray-600",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-200 leading-relaxed",
                                            children: result
                                        }, void 0, false, {
                                            fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                            lineNumber: 185,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                        lineNumber: 184,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(PresidentialDashboard, "Lc+7AzrrShOWAt+XXbYl256zNZA=");
_c = PresidentialDashboard;
var _c;
__turbopack_context__.k.register(_c, "PresidentialDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/EconomicWarfare.tsx
__turbopack_context__.s([
    "default",
    ()=>EconomicWarfare
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/szaban/frontend/szaban-presidency/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/szaban/frontend/szaban-presidency/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function EconomicWarfare({ countries }) {
    _s();
    const [selectedCountry, setSelectedCountry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [sanctionType, setSanctionType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('trade');
    const [sanctionStrength, setSanctionStrength] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(50);
    const [activeSanctions, setActiveSanctions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [espionageTarget, setEspionageTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [espionageResults, setEspionageResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const targetCountries = countries.filter((country)=>country.name !== 'SZABAN');
    const imposeSanctions = async ()=>{
        if (!selectedCountry) return;
        const sanction = {
            type: sanctionType,
            target: selectedCountry,
            strength: sanctionStrength,
            duration: 12
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
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold text-white mb-2",
                        children: "💰 Economic Warfare Command"
                    }, void 0, false, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400",
                        children: "Strategic economic operations to maintain SZABANs dominance"
                    }, void 0, false, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-2 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-800/50 rounded-2xl border border-gray-700 p-6 backdrop-blur-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-red-400 mb-4 flex items-center",
                                children: "⚡ Economic Sanctions"
                            }, void 0, false, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-300 mb-2",
                                                children: "Target Country"
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                                lineNumber: 108,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: selectedCountry,
                                                onChange: (e)=>setSelectedCountry(e.target.value),
                                                className: "w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        className: "text-gray-400",
                                                        children: "Select target country"
                                                    }, void 0, false, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 17
                                                    }, this),
                                                    targetCountries.map((country)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: country.name,
                                                            className: "text-white",
                                                            children: [
                                                                country.name,
                                                                " (GDP: $",
                                                                (country.gdp / 1e9).toFixed(1),
                                                                "B)"
                                                            ]
                                                        }, country.id, true, {
                                                            fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                                            lineNumber: 116,
                                                            columnNumber: 19
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                                lineNumber: 109,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-300 mb-2",
                                                children: "Sanction Type"
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                                lineNumber: 124,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: sanctionType,
                                                onChange: (e)=>setSanctionType(e.target.value),
                                                className: "w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "trade",
                                                        className: "text-white",
                                                        children: "Trade Embargo"
                                                    }, void 0, false, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "financial",
                                                        className: "text-white",
                                                        children: "Financial Sanctions"
                                                    }, void 0, false, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "technology",
                                                        className: "text-white",
                                                        children: "Technology Export Ban"
                                                    }, void 0, false, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "energy",
                                                        className: "text-white",
                                                        children: "Energy Sanctions"
                                                    }, void 0, false, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                                lineNumber: 125,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-300 mb-2",
                                                children: [
                                                    "Sanction Strength: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-400",
                                                        children: [
                                                            sanctionStrength,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 36
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                                lineNumber: 138,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "10",
                                                max: "100",
                                                value: sanctionStrength,
                                                onChange: (e)=>setSanctionStrength(Number(e.target.value)),
                                                className: "w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                                lineNumber: 141,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100",
                                        onClick: imposeSanctions,
                                        disabled: !selectedCountry,
                                        children: "🚫 Impose Sanctions"
                                    }, void 0, false, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-800/50 rounded-2xl border border-gray-700 p-6 backdrop-blur-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-purple-400 mb-4 flex items-center",
                                children: "🕵️ Economic Espionage"
                            }, void 0, false, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-300 mb-2",
                                                children: "Espionage Target"
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                                lineNumber: 169,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: espionageTarget,
                                                onChange: (e)=>setEspionageTarget(e.target.value),
                                                className: "w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        className: "text-gray-400",
                                                        children: "Select target for intelligence"
                                                    }, void 0, false, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                                        lineNumber: 175,
                                                        columnNumber: 17
                                                    }, this),
                                                    targetCountries.map((country)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: country.name,
                                                            className: "text-white",
                                                            children: country.name
                                                        }, country.id, false, {
                                                            fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                                            lineNumber: 177,
                                                            columnNumber: 19
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                                lineNumber: 170,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                        lineNumber: 168,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100",
                                        onClick: conductEconomicEspionage,
                                        disabled: !espionageTarget,
                                        children: "🔍 Conduct Economic Espionage"
                                    }, void 0, false, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                        lineNumber: 184,
                                        columnNumber: 13
                                    }, this),
                                    espionageResults && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-700/50 rounded-xl border border-gray-600 p-4 mt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-lg font-bold text-purple-400 mb-2",
                                                children: "Espionage Report"
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                                lineNumber: 194,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-black/30 rounded-lg p-3 border border-gray-600",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-200 text-sm leading-relaxed",
                                                    children: espionageResults
                                                }, void 0, false, {
                                                    fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                                lineNumber: 195,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                        lineNumber: 193,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-800/50 rounded-2xl border border-gray-700 p-6 backdrop-blur-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-orange-400 mb-4 flex items-center",
                                children: "📋 Active Sanctions"
                            }, void 0, false, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this),
                            activeSanctions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 text-center py-4",
                                children: "No active sanctions"
                            }, void 0, false, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                lineNumber: 209,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: activeSanctions.map((sanction, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-700/50 rounded-lg border border-gray-600 p-4 flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-bold text-white",
                                                        children: sanction.target
                                                    }, void 0, false, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                                        lineNumber: 215,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm text-gray-300",
                                                        children: [
                                                            "Type: ",
                                                            sanction.type,
                                                            " | Strength: ",
                                                            sanction.strength,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                                        lineNumber: 216,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                                lineNumber: 214,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "bg-green-600 hover:bg-green-700 text-white py-1 px-3 rounded text-sm font-semibold transition-colors",
                                                onClick: ()=>liftSanctions(sanction.target),
                                                children: "Lift"
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                                lineNumber: 220,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                        lineNumber: 213,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                lineNumber: 211,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-800/50 rounded-2xl border border-gray-700 p-6 backdrop-blur-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-blue-400 mb-4 flex items-center",
                                children: "📊 Economic Intelligence"
                            }, void 0, false, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                lineNumber: 234,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-3 max-h-96 overflow-y-auto",
                                children: targetCountries.map((country)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-700/50 rounded-lg border border-gray-600 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-bold text-white mb-2",
                                                children: country.name
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                                lineNumber: 240,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-green-400",
                                                        children: [
                                                            "GDP: $",
                                                            (country.gdp / 1e9).toFixed(1),
                                                            "B"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                                        lineNumber: 242,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-yellow-400",
                                                        children: [
                                                            "Growth: ",
                                                            country.gdp_growth_rate.toFixed(1),
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-300",
                                                        children: [
                                                            "Resources: Oil: ",
                                                            country.resources.oil,
                                                            " | Food: ",
                                                            country.resources.food
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                                        lineNumber: 244,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                                lineNumber: 241,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, country.id, true, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                        lineNumber: 239,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_s(EconomicWarfare, "koPFHG8W0uwjyHjDeFXVxHzAETA=");
_c = EconomicWarfare;
var _c;
__turbopack_context__.k.register(_c, "EconomicWarfare");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/DiplomaticRelations.tsx
__turbopack_context__.s([
    "default",
    ()=>DiplomaticRelations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/szaban/frontend/szaban-presidency/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/szaban/frontend/szaban-presidency/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function DiplomaticRelations({ countries }) {
    _s();
    const [selectedCountry, setSelectedCountry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [diplomacyType, setDiplomacyType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('alliance');
    const [terms, setTerms] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const targetCountries = countries.filter((country)=>country.name !== 'SZABAN');
    const executeDiplomacy = async ()=>{
        if (!selectedCountry) return;
        try {
            const response = await fetch('http://localhost:8000/diplomacy/action', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    target_country: selectedCountry,
                    diplomacy_type: diplomacyType,
                    terms: terms ? JSON.parse(terms) : {}
                })
            });
            const data = await response.json();
            setResult(data.result);
        } catch (error) {
            console.error('Error executing diplomacy:', error);
            setResult('Failed to execute diplomatic action');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold text-white mb-2",
                        children: "🤝 Diplomatic Relations"
                    }, void 0, false, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400",
                        children: "International diplomacy and alliance management"
                    }, void 0, false, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-2 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-800/50 rounded-2xl border border-gray-700 p-6 backdrop-blur-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-green-400 mb-6 flex items-center",
                                children: "🌐 Diplomatic Actions"
                            }, void 0, false, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-300 mb-2",
                                                children: "Target Country"
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                                                lineNumber: 63,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: selectedCountry,
                                                onChange: (e)=>setSelectedCountry(e.target.value),
                                                className: "w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        className: "text-gray-400",
                                                        children: "Select country"
                                                    }, void 0, false, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 17
                                                    }, this),
                                                    targetCountries.map((country)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: country.name,
                                                            className: "text-white",
                                                            children: [
                                                                country.name,
                                                                " (Relations: ",
                                                                country.public_opinion,
                                                                ")"
                                                            ]
                                                        }, country.id, true, {
                                                            fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                                                            lineNumber: 71,
                                                            columnNumber: 19
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                                                lineNumber: 64,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-300 mb-2",
                                                children: "Diplomacy Type"
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                                                lineNumber: 79,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: diplomacyType,
                                                onChange: (e)=>setDiplomacyType(e.target.value),
                                                className: "w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "alliance",
                                                        className: "text-white",
                                                        children: "Form Alliance"
                                                    }, void 0, false, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "treaty",
                                                        className: "text-white",
                                                        children: "Sign Treaty"
                                                    }, void 0, false, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                                                        lineNumber: 86,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "negotiation",
                                                        className: "text-white",
                                                        children: "Initiate Negotiation"
                                                    }, void 0, false, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "summit",
                                                        className: "text-white",
                                                        children: "Host Summit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                                                lineNumber: 80,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-300 mb-2",
                                                children: "Terms (JSON)"
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                                                lineNumber: 93,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: terms,
                                                onChange: (e)=>setTerms(e.target.value),
                                                placeholder: '{"treaty_type": "trade", "szaban_position": "..."}',
                                                rows: 3,
                                                className: "w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                                                lineNumber: 94,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100",
                                        onClick: executeDiplomacy,
                                        disabled: !selectedCountry,
                                        children: "✨ Execute Diplomatic Action"
                                    }, void 0, false, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-800/50 rounded-2xl border border-gray-700 p-6 backdrop-blur-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-blue-400 mb-6 flex items-center",
                                children: "📊 Current Relations"
                            }, void 0, false, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-4 max-h-96 overflow-y-auto",
                                children: targetCountries.map((country)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-700/50 rounded-xl border border-gray-600 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-start mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-bold text-white text-lg",
                                                        children: country.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 19
                                                    }, this),
                                                    country.alliances.includes('SZABAN') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-green-600 text-white text-xs px-2 py-1 rounded-full font-semibold",
                                                        children: "ALLIED"
                                                    }, void 0, false, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                                                lineNumber: 121,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-300",
                                                                children: "Relations:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                                                                lineNumber: 131,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-20 bg-gray-600 rounded-full h-2 mr-2",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "bg-blue-500 h-2 rounded-full",
                                                                            style: {
                                                                                width: `${country.public_opinion}%`
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                                                                            lineNumber: 134,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                                                                        lineNumber: 133,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `font-bold ${country.public_opinion >= 80 ? 'text-green-400' : country.public_opinion >= 60 ? 'text-yellow-400' : 'text-red-400'}`,
                                                                        children: [
                                                                            country.public_opinion,
                                                                            "/100"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                                                                        lineNumber: 139,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                                                                lineNumber: 132,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-300",
                                                                children: "Stability:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                                                                lineNumber: 148,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `font-bold ${country.stability >= 80 ? 'text-green-400' : country.stability >= 60 ? 'text-yellow-400' : 'text-red-400'}`,
                                                                children: [
                                                                    country.stability,
                                                                    "/100"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                                                                lineNumber: 149,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-300",
                                                                children: "Alliances:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                                                                lineNumber: 157,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-purple-400 font-bold",
                                                                children: country.alliances.length
                                                            }, void 0, false, {
                                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                                                                lineNumber: 158,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                                                lineNumber: 129,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, country.id, true, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2 bg-gray-800/50 rounded-2xl border border-gray-700 p-6 backdrop-blur-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-yellow-400 mb-4",
                                children: "Diplomatic Result"
                            }, void 0, false, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-black/30 rounded-xl border border-gray-600 p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-200 leading-relaxed",
                                    children: result
                                }, void 0, false, {
                                    fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                                    lineNumber: 171,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                                lineNumber: 170,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                        lineNumber: 168,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(DiplomaticRelations, "gYYKai+Z+sMmSEAlXGBb9ffbZyk=");
_c = DiplomaticRelations;
var _c;
__turbopack_context__.k.register(_c, "DiplomaticRelations");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/szaban/frontend/szaban-presidency/components/MilitaryStrategy.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/MilitaryStrategy.tsx
__turbopack_context__.s([
    "default",
    ()=>MilitaryStrategy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/szaban/frontend/szaban-presidency/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/szaban/frontend/szaban-presidency/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function MilitaryStrategy({ countries }) {
    _s();
    const [selectedCountry, setSelectedCountry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [actionType, setActionType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('military_exercises');
    const [intensity, setIntensity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(50);
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const targetCountries = countries.filter((country)=>country.name !== 'SZABAN');
    const executeMilitaryAction = async ()=>{
        if (!selectedCountry) return;
        try {
            const response = await fetch('http://localhost:8000/military/action', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    target_country: selectedCountry,
                    action_type: actionType,
                    intensity: intensity,
                    details: {}
                })
            });
            const data = await response.json();
            setResult(data.result);
            if (data.consequences) {
                console.log('Consequences:', data.consequences);
            }
        } catch (error) {
            console.error('Error executing military action:', error);
            setResult('Failed to execute military action');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold text-white mb-2",
                        children: "⚔️ Military Strategy Command"
                    }, void 0, false, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/MilitaryStrategy.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400",
                        children: "Strategic military operations and intelligence"
                    }, void 0, false, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/MilitaryStrategy.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/szaban/frontend/szaban-presidency/components/MilitaryStrategy.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-2 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-800/50 rounded-2xl border border-gray-700 p-6 backdrop-blur-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-red-400 mb-6 flex items-center",
                                children: "🎯 Military Operations"
                            }, void 0, false, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/MilitaryStrategy.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-300 mb-2",
                                                children: "Target Country"
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/MilitaryStrategy.tsx",
                                                lineNumber: 68,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: selectedCountry,
                                                onChange: (e)=>setSelectedCountry(e.target.value),
                                                className: "w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        className: "text-gray-400",
                                                        children: "Select target"
                                                    }, void 0, false, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/MilitaryStrategy.tsx",
                                                        lineNumber: 74,
                                                        columnNumber: 17
                                                    }, this),
                                                    targetCountries.map((country)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: country.name,
                                                            className: "text-white",
                                                            children: [
                                                                country.name,
                                                                " (Military: ",
                                                                country.military_strength,
                                                                ")"
                                                            ]
                                                        }, country.id, true, {
                                                            fileName: "[project]/szaban/frontend/szaban-presidency/components/MilitaryStrategy.tsx",
                                                            lineNumber: 76,
                                                            columnNumber: 19
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/MilitaryStrategy.tsx",
                                                lineNumber: 69,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/MilitaryStrategy.tsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-300 mb-2",
                                                children: "Operation Type"
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/MilitaryStrategy.tsx",
                                                lineNumber: 84,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: actionType,
                                                onChange: (e)=>setActionType(e.target.value),
                                                className: "w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "military_exercises",
                                                        className: "text-white",
                                                        children: "Military Exercises"
                                                    }, void 0, false, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/MilitaryStrategy.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "nuclear_threat",
                                                        className: "text-white",
                                                        children: "Nuclear Deterrence"
                                                    }, void 0, false, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/MilitaryStrategy.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "covert_ops",
                                                        className: "text-white",
                                                        children: "Covert Operations"
                                                    }, void 0, false, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/MilitaryStrategy.tsx",
                                                        lineNumber: 92,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "cyber_attack",
                                                        className: "text-white",
                                                        children: "Cyber Attack"
                                                    }, void 0, false, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/MilitaryStrategy.tsx",
                                                        lineNumber: 93,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/MilitaryStrategy.tsx",
                                                lineNumber: 85,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/MilitaryStrategy.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-300 mb-2",
                                                children: [
                                                    "Intensity: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-400",
                                                        children: [
                                                            intensity,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/MilitaryStrategy.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 28
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/MilitaryStrategy.tsx",
                                                lineNumber: 98,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "10",
                                                max: "100",
                                                value: intensity,
                                                onChange: (e)=>setIntensity(Number(e.target.value)),
                                                className: "w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/MilitaryStrategy.tsx",
                                                lineNumber: 101,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/MilitaryStrategy.tsx",
                                        lineNumber: 97,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100",
                                        onClick: executeMilitaryAction,
                                        disabled: !selectedCountry,
                                        children: "🚀 Execute Military Operation"
                                    }, void 0, false, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/MilitaryStrategy.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/MilitaryStrategy.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/MilitaryStrategy.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-800/50 rounded-2xl border border-gray-700 p-6 backdrop-blur-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-blue-400 mb-6 flex items-center",
                                children: "📡 Military Intelligence"
                            }, void 0, false, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/MilitaryStrategy.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-4 max-h-96 overflow-y-auto",
                                children: targetCountries.map((country)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-700/50 rounded-xl border border-gray-600 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-bold text-white text-lg mb-3",
                                                children: country.name
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/MilitaryStrategy.tsx",
                                                lineNumber: 129,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-300",
                                                                children: "Military Strength:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/MilitaryStrategy.tsx",
                                                                lineNumber: 132,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-red-400 font-bold",
                                                                children: country.military_strength
                                                            }, void 0, false, {
                                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/MilitaryStrategy.tsx",
                                                                lineNumber: 133,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/MilitaryStrategy.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-300",
                                                                children: "Nuclear Arsenal:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/MilitaryStrategy.tsx",
                                                                lineNumber: 136,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-orange-400 font-bold",
                                                                children: country.nuclear_arsenal
                                                            }, void 0, false, {
                                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/MilitaryStrategy.tsx",
                                                                lineNumber: 137,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/MilitaryStrategy.tsx",
                                                        lineNumber: 135,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-300",
                                                                children: "Tech Level:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/MilitaryStrategy.tsx",
                                                                lineNumber: 140,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-blue-400 font-bold",
                                                                children: country.technology_level
                                                            }, void 0, false, {
                                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/MilitaryStrategy.tsx",
                                                                lineNumber: 141,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/MilitaryStrategy.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/MilitaryStrategy.tsx",
                                                lineNumber: 130,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, country.id, true, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/MilitaryStrategy.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/MilitaryStrategy.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/MilitaryStrategy.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2 bg-gray-800/50 rounded-2xl border border-gray-700 p-6 backdrop-blur-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-yellow-400 mb-4",
                                children: "Operation Result"
                            }, void 0, false, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/MilitaryStrategy.tsx",
                                lineNumber: 152,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-black/30 rounded-xl border border-gray-600 p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-200 leading-relaxed",
                                    children: result
                                }, void 0, false, {
                                    fileName: "[project]/szaban/frontend/szaban-presidency/components/MilitaryStrategy.tsx",
                                    lineNumber: 154,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/MilitaryStrategy.tsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/MilitaryStrategy.tsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/szaban/frontend/szaban-presidency/components/MilitaryStrategy.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/szaban/frontend/szaban-presidency/components/MilitaryStrategy.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(MilitaryStrategy, "g+vIWDhj0rCDdS7TF5KIuoa3WlQ=");
_c = MilitaryStrategy;
var _c;
__turbopack_context__.k.register(_c, "MilitaryStrategy");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/InternalAffairs.tsx
__turbopack_context__.s([
    "default",
    ()=>InternalAffairs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/szaban/frontend/szaban-presidency/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/szaban/frontend/szaban-presidency/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function InternalAffairs({ countries }) {
    _s();
    const [actionType, setActionType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('develop_tech');
    const [focusArea, setFocusArea] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('general');
    const [investment, setInvestment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1000000000);
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const szaban = countries.find((country)=>country.name === 'SZABAN');
    const executeInternalAction = async ()=>{
        if (!szaban) return;
        try {
            const response = await fetch('http://localhost:8000/internal/action', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    action_type: actionType,
                    focus_area: focusArea,
                    investment: investment,
                    details: {}
                })
            });
            const data = await response.json();
            setResult(data.result);
        } catch (error) {
            console.error('Error executing internal action:', error);
            setResult('Failed to execute internal action');
        }
    };
    if (!szaban) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto mb-4"
            }, void 0, false, {
                fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-400",
                children: "Loading SZABAN data..."
            }, void 0, false, {
                fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold text-white mb-2",
                        children: "🏛️ Internal Affairs & Development"
                    }, void 0, false, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400",
                        children: "National development and resource management"
                    }, void 0, false, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-2 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-800/50 rounded-2xl border border-gray-700 p-6 backdrop-blur-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-yellow-400 mb-6 flex items-center",
                                children: "📈 National Status"
                            }, void 0, false, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-700/50 rounded-xl border border-gray-600 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-bold text-green-400 mb-2",
                                                children: "💰 Economy"
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                                lineNumber: 74,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-bold text-white",
                                                children: [
                                                    "$",
                                                    (szaban.gdp / 1e9).toFixed(1),
                                                    "B GDP"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                                lineNumber: 75,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-300 mt-1",
                                                children: "National Economic Power"
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                                lineNumber: 76,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-700/50 rounded-xl border border-gray-600 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-bold text-blue-400 mb-2",
                                                children: "🔬 Technology"
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                                lineNumber: 79,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl font-bold text-white",
                                                        children: [
                                                            szaban.technology_level,
                                                            "/100"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-24 bg-gray-600 rounded-full h-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-blue-500 h-2 rounded-full",
                                                            style: {
                                                                width: `${szaban.technology_level}%`
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                                            lineNumber: 83,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                                lineNumber: 80,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-300 mt-1",
                                                children: "Technology Level"
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                                lineNumber: 89,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-700/50 rounded-xl border border-gray-600 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-bold text-orange-400 mb-2",
                                                children: "⛽ Resources"
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                                lineNumber: 92,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-300",
                                                                children: "Oil:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                                                lineNumber: 95,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-orange-400 font-bold",
                                                                children: szaban.resources.oil
                                                            }, void 0, false, {
                                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                                                lineNumber: 96,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-300",
                                                                children: "Uranium:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                                                lineNumber: 99,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-green-400 font-bold",
                                                                children: szaban.resources.uranium
                                                            }, void 0, false, {
                                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                                                lineNumber: 100,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-300",
                                                                children: "Food:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                                                lineNumber: 103,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-yellow-400 font-bold",
                                                                children: szaban.resources.food
                                                            }, void 0, false, {
                                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                                                lineNumber: 104,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                                        lineNumber: 102,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                                lineNumber: 93,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-800/50 rounded-2xl border border-gray-700 p-6 backdrop-blur-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-purple-400 mb-6 flex items-center",
                                children: "🚀 Development Actions"
                            }, void 0, false, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-300 mb-2",
                                                children: "Action Type"
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                                lineNumber: 119,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: actionType,
                                                onChange: (e)=>setActionType(e.target.value),
                                                className: "w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "develop_tech",
                                                        className: "text-white",
                                                        children: "Develop Technology"
                                                    }, void 0, false, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "extract_resources",
                                                        className: "text-white",
                                                        children: "Extract Resources"
                                                    }, void 0, false, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "build_infrastructure",
                                                        className: "text-white",
                                                        children: "Build Infrastructure"
                                                    }, void 0, false, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "research_weapons",
                                                        className: "text-white",
                                                        children: "Research Weapons"
                                                    }, void 0, false, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                                lineNumber: 120,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-300 mb-2",
                                                children: "Focus Area"
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                                lineNumber: 133,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: focusArea,
                                                onChange: (e)=>setFocusArea(e.target.value),
                                                className: "w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "general",
                                                        className: "text-white",
                                                        children: "General"
                                                    }, void 0, false, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "energy",
                                                        className: "text-white",
                                                        children: "Energy"
                                                    }, void 0, false, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "defense",
                                                        className: "text-white",
                                                        children: "Defense"
                                                    }, void 0, false, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "agriculture",
                                                        className: "text-white",
                                                        children: "Agriculture"
                                                    }, void 0, false, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "technology",
                                                        className: "text-white",
                                                        children: "Advanced Tech"
                                                    }, void 0, false, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                                lineNumber: 134,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-300 mb-2",
                                                children: [
                                                    "Investment: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-green-400",
                                                        children: [
                                                            "$",
                                                            (investment / 1e6).toFixed(0),
                                                            "M"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                                lineNumber: 148,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "100000000",
                                                max: "10000000000",
                                                step: "100000000",
                                                value: investment,
                                                onChange: (e)=>setInvestment(Number(e.target.value)),
                                                className: "w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                                lineNumber: 151,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-xs text-gray-400 mt-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "$100M"
                                                    }, void 0, false, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "$10B"
                                                    }, void 0, false, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                                lineNumber: 160,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                        lineNumber: 147,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105",
                                        onClick: executeInternalAction,
                                        children: "💫 Execute Development"
                                    }, void 0, false, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                        lineNumber: 166,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 bg-gray-700/50 rounded-xl border border-gray-600 p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-lg font-bold text-yellow-400 mb-2",
                                        children: "Development Result"
                                    }, void 0, false, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                        lineNumber: 176,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-black/30 rounded-lg p-3 border border-gray-600",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-200 text-sm leading-relaxed",
                                            children: result
                                        }, void 0, false, {
                                            fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                            lineNumber: 178,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                        lineNumber: 177,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                                lineNumber: 175,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s(InternalAffairs, "tRso6aimIkkbsLetRtPpNkzQh7Q=");
_c = InternalAffairs;
var _c;
__turbopack_context__.k.register(_c, "InternalAffairs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/szaban/frontend/szaban-presidency/components/EnhancedIntelligence.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/EnhancedIntelligence.tsx
__turbopack_context__.s([
    "default",
    ()=>EnhancedIntelligence
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/szaban/frontend/szaban-presidency/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/szaban/frontend/szaban-presidency/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function EnhancedIntelligence({ countries }) {
    _s();
    const [selectedCountry, setSelectedCountry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [operationType, setOperationType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('surveillance');
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const targetCountries = countries.filter((country)=>country.name !== 'SZABAN');
    const executeIntelligenceOperation = async ()=>{
        if (!selectedCountry) return;
        try {
            const response = await fetch('http://localhost:8000/intelligence/operation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    target_country: selectedCountry,
                    operation_type: operationType,
                    resources: {}
                })
            });
            const data = await response.json();
            setResult(data.result);
        } catch (error) {
            console.error('Error executing intelligence operation:', error);
            setResult('Failed to execute intelligence operation');
        }
    };
    const getRiskLevelColor = (risk)=>{
        switch(risk){
            case 'Low Risk':
                return 'bg-green-500/20 text-green-400 border-green-500';
            case 'Medium Risk':
                return 'bg-yellow-500/20 text-yellow-400 border-yellow-500';
            case 'High Risk':
                return 'bg-orange-500/20 text-orange-400 border-orange-500';
            case 'Very High Risk':
                return 'bg-red-500/20 text-red-400 border-red-500';
            default:
                return 'bg-gray-500/20 text-gray-400 border-gray-500';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold text-white mb-2",
                        children: "🕵️ Enhanced Intelligence Network"
                    }, void 0, false, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EnhancedIntelligence.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400",
                        children: "Covert operations and intelligence gathering"
                    }, void 0, false, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EnhancedIntelligence.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/szaban/frontend/szaban-presidency/components/EnhancedIntelligence.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-2 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-800/50 rounded-2xl border border-gray-700 p-6 backdrop-blur-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-purple-400 mb-6 flex items-center",
                                children: "🎭 Covert Operations"
                            }, void 0, false, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EnhancedIntelligence.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-300 mb-2",
                                                children: "Target Country"
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EnhancedIntelligence.tsx",
                                                lineNumber: 71,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: selectedCountry,
                                                onChange: (e)=>setSelectedCountry(e.target.value),
                                                className: "w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        className: "text-gray-400",
                                                        children: "Select target"
                                                    }, void 0, false, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EnhancedIntelligence.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 17
                                                    }, this),
                                                    targetCountries.map((country)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: country.name,
                                                            className: "text-white",
                                                            children: [
                                                                country.name,
                                                                " (Tech: ",
                                                                country.technology_level,
                                                                ")"
                                                            ]
                                                        }, country.id, true, {
                                                            fileName: "[project]/szaban/frontend/szaban-presidency/components/EnhancedIntelligence.tsx",
                                                            lineNumber: 79,
                                                            columnNumber: 19
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EnhancedIntelligence.tsx",
                                                lineNumber: 72,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EnhancedIntelligence.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-300 mb-2",
                                                children: "Operation Type"
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EnhancedIntelligence.tsx",
                                                lineNumber: 87,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: operationType,
                                                onChange: (e)=>setOperationType(e.target.value),
                                                className: "w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "surveillance",
                                                        className: "text-white",
                                                        children: "Surveillance"
                                                    }, void 0, false, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EnhancedIntelligence.tsx",
                                                        lineNumber: 93,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "sabotage",
                                                        className: "text-white",
                                                        children: "Sabotage"
                                                    }, void 0, false, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EnhancedIntelligence.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "propaganda",
                                                        className: "text-white",
                                                        children: "Propaganda"
                                                    }, void 0, false, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EnhancedIntelligence.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "recruitment",
                                                        className: "text-white",
                                                        children: "Asset Recruitment"
                                                    }, void 0, false, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EnhancedIntelligence.tsx",
                                                        lineNumber: 96,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EnhancedIntelligence.tsx",
                                                lineNumber: 88,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EnhancedIntelligence.tsx",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100",
                                        onClick: executeIntelligenceOperation,
                                        disabled: !selectedCountry,
                                        children: "🎯 Execute Covert Operation"
                                    }, void 0, false, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EnhancedIntelligence.tsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EnhancedIntelligence.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 bg-gray-700/50 rounded-xl border border-gray-600 p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-lg font-bold text-yellow-400 mb-2",
                                        children: "Operation Result"
                                    }, void 0, false, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EnhancedIntelligence.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-black/30 rounded-lg p-3 border border-gray-600",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-200 text-sm leading-relaxed",
                                            children: result
                                        }, void 0, false, {
                                            fileName: "[project]/szaban/frontend/szaban-presidency/components/EnhancedIntelligence.tsx",
                                            lineNumber: 113,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EnhancedIntelligence.tsx",
                                        lineNumber: 112,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EnhancedIntelligence.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EnhancedIntelligence.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-800/50 rounded-2xl border border-gray-700 p-6 backdrop-blur-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-blue-400 mb-6 flex items-center",
                                children: "💼 Intelligence Capabilities"
                            }, void 0, false, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EnhancedIntelligence.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-4",
                                children: [
                                    {
                                        icon: '📡',
                                        title: 'Surveillance',
                                        description: 'Monitor enemy communications and movements',
                                        risk: 'Medium Risk'
                                    },
                                    {
                                        icon: '💣',
                                        title: 'Sabotage',
                                        description: 'Disrupt enemy military and economic capabilities',
                                        risk: 'High Risk'
                                    },
                                    {
                                        icon: '📢',
                                        title: 'Propaganda',
                                        description: 'Influence foreign public opinion',
                                        risk: 'Low Risk'
                                    },
                                    {
                                        icon: '🕵️',
                                        title: 'Recruitment',
                                        description: 'Recruit assets within enemy governments',
                                        risk: 'Very High Risk'
                                    }
                                ].map((capability, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-700/50 rounded-xl border border-gray-600 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center space-x-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-2xl",
                                                                children: capability.icon
                                                            }, void 0, false, {
                                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EnhancedIntelligence.tsx",
                                                                lineNumber: 134,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-bold text-white text-lg",
                                                                children: capability.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EnhancedIntelligence.tsx",
                                                                lineNumber: 135,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EnhancedIntelligence.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `px-2 py-1 rounded text-xs font-semibold border ${getRiskLevelColor(capability.risk)}`,
                                                        children: capability.risk
                                                    }, void 0, false, {
                                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EnhancedIntelligence.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EnhancedIntelligence.tsx",
                                                lineNumber: 132,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-300 text-sm",
                                                children: capability.description
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EnhancedIntelligence.tsx",
                                                lineNumber: 141,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EnhancedIntelligence.tsx",
                                        lineNumber: 131,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/EnhancedIntelligence.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/EnhancedIntelligence.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/szaban/frontend/szaban-presidency/components/EnhancedIntelligence.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/szaban/frontend/szaban-presidency/components/EnhancedIntelligence.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_s(EnhancedIntelligence, "Yo/wMKelCZc/e5+t6Px/GDAcKBg=");
_c = EnhancedIntelligence;
var _c;
__turbopack_context__.k.register(_c, "EnhancedIntelligence");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/szaban/frontend/szaban-presidency/components/CrisisManagement.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/CrisisManagement.tsx
__turbopack_context__.s([
    "default",
    ()=>CrisisManagement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/szaban/frontend/szaban-presidency/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/szaban/frontend/szaban-presidency/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function CrisisManagement() {
    _s();
    const [crises, setCrises] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedResolution, setSelectedResolution] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CrisisManagement.useEffect": ()=>{
            // eslint-disable-next-line react-hooks/immutability
            fetchActiveCrises();
        }
    }["CrisisManagement.useEffect"], []);
    const fetchActiveCrises = async ()=>{
        try {
            const response = await fetch('http://localhost:8000/crisis/active');
            const data = await response.json();
            setCrises(data.crisis_events);
        } catch (error) {
            console.error('Error fetching crises:', error);
        }
    };
    const resolveCrisis = async (crisisId)=>{
        if (!selectedResolution) return;
        try {
            const response = await fetch('http://localhost:8000/crisis/resolve', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    crisis_id: crisisId,
                    resolution: selectedResolution,
                    resources_committed: {}
                })
            });
            const data = await response.json();
            setResult(data.result);
            fetchActiveCrises();
        } catch (error) {
            console.error('Error resolving crisis:', error);
            setResult('Failed to resolve crisis');
        }
    };
    const generateNewCrisis = async ()=>{
        try {
            const response = await fetch('http://localhost:8000/crisis/generate', {
                method: 'POST'
            });
            const data = await response.json();
            if (data.crisis) {
                setCrises((prev)=>[
                        ...prev,
                        data.crisis
                    ]);
            }
        } catch (error) {
            console.error('Error generating crisis:', error);
        }
    };
    const getSeverityColor = (severity)=>{
        switch(severity){
            case 'low':
                return 'bg-green-500/20 border-green-500 text-green-400';
            case 'medium':
                return 'bg-yellow-500/20 border-yellow-500 text-yellow-400';
            case 'high':
                return 'bg-red-500/20 border-red-500 text-red-400';
            default:
                return 'bg-gray-500/20 border-gray-500 text-gray-400';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold text-white mb-2",
                        children: "🚨 Crisis Management Center"
                    }, void 0, false, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/CrisisManagement.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400",
                        children: "National emergency response and crisis resolution"
                    }, void 0, false, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/CrisisManagement.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/szaban/frontend/szaban-presidency/components/CrisisManagement.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center space-x-2",
                    onClick: generateNewCrisis,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "⚠️"
                        }, void 0, false, {
                            fileName: "[project]/szaban/frontend/szaban-presidency/components/CrisisManagement.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Simulate New Crisis"
                        }, void 0, false, {
                            fileName: "[project]/szaban/frontend/szaban-presidency/components/CrisisManagement.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/szaban/frontend/szaban-presidency/components/CrisisManagement.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/szaban/frontend/szaban-presidency/components/CrisisManagement.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6",
                children: crises.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gray-800/50 rounded-2xl border border-gray-700 p-12 text-center backdrop-blur-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-6xl mb-4",
                            children: "🕊️"
                        }, void 0, false, {
                            fileName: "[project]/szaban/frontend/szaban-presidency/components/CrisisManagement.tsx",
                            lineNumber: 103,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-bold text-green-400 mb-2",
                            children: "No Active Crises"
                        }, void 0, false, {
                            fileName: "[project]/szaban/frontend/szaban-presidency/components/CrisisManagement.tsx",
                            lineNumber: 104,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400",
                            children: "The nation is at peace. All systems operational."
                        }, void 0, false, {
                            fileName: "[project]/szaban/frontend/szaban-presidency/components/CrisisManagement.tsx",
                            lineNumber: 105,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/szaban/frontend/szaban-presidency/components/CrisisManagement.tsx",
                    lineNumber: 102,
                    columnNumber: 11
                }, this) : crises.map((crisis)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-800/50 rounded-2xl border border-gray-700 p-6 backdrop-blur-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-start mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold text-white",
                                        children: crisis.title
                                    }, void 0, false, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/CrisisManagement.tsx",
                                        lineNumber: 114,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `px-3 py-1 rounded-full text-sm font-semibold border ${getSeverityColor(crisis.severity)}`,
                                        children: crisis.severity.toUpperCase()
                                    }, void 0, false, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/CrisisManagement.tsx",
                                        lineNumber: 115,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/CrisisManagement.tsx",
                                lineNumber: 113,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-300 mb-6 leading-relaxed",
                                children: crisis.description
                            }, void 0, false, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/CrisisManagement.tsx",
                                lineNumber: 120,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-700/50 rounded-xl border border-gray-600 p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-lg font-bold text-yellow-400 mb-3",
                                        children: "🛡️ Resolution Options"
                                    }, void 0, false, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/CrisisManagement.tsx",
                                        lineNumber: 123,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col lg:flex-row lg:items-end gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: selectedResolution,
                                                    onChange: (e)=>setSelectedResolution(e.target.value),
                                                    className: "w-full bg-gray-600 border border-gray-500 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            className: "text-gray-400",
                                                            children: "Select resolution"
                                                        }, void 0, false, {
                                                            fileName: "[project]/szaban/frontend/szaban-presidency/components/CrisisManagement.tsx",
                                                            lineNumber: 131,
                                                            columnNumber: 23
                                                        }, this),
                                                        crisis.resolution_options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: option,
                                                                className: "text-white",
                                                                children: option.replace(/_/g, ' ')
                                                            }, option, false, {
                                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/CrisisManagement.tsx",
                                                                lineNumber: 133,
                                                                columnNumber: 25
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/szaban/frontend/szaban-presidency/components/CrisisManagement.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/CrisisManagement.tsx",
                                                lineNumber: 125,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "bg-yellow-600 hover:bg-yellow-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 whitespace-nowrap",
                                                onClick: ()=>resolveCrisis(crisis.id),
                                                disabled: !selectedResolution,
                                                children: "🚀 Resolve Crisis"
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/components/CrisisManagement.tsx",
                                                lineNumber: 139,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/components/CrisisManagement.tsx",
                                        lineNumber: 124,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/components/CrisisManagement.tsx",
                                lineNumber: 122,
                                columnNumber: 15
                            }, this)
                        ]
                    }, crisis.id, true, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/CrisisManagement.tsx",
                        lineNumber: 109,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/szaban/frontend/szaban-presidency/components/CrisisManagement.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-800/50 rounded-2xl border border-gray-700 p-6 backdrop-blur-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-green-400 mb-4",
                        children: "Resolution Result"
                    }, void 0, false, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/CrisisManagement.tsx",
                        lineNumber: 156,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-black/30 rounded-xl border border-gray-600 p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-200 leading-relaxed",
                            children: result
                        }, void 0, false, {
                            fileName: "[project]/szaban/frontend/szaban-presidency/components/CrisisManagement.tsx",
                            lineNumber: 158,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/components/CrisisManagement.tsx",
                        lineNumber: 157,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/szaban/frontend/szaban-presidency/components/CrisisManagement.tsx",
                lineNumber: 155,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/szaban/frontend/szaban-presidency/components/CrisisManagement.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
_s(CrisisManagement, "dWREvSpInwWXAJY2P82cb9/DjIE=");
_c = CrisisManagement;
var _c;
__turbopack_context__.k.register(_c, "CrisisManagement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/szaban/frontend/szaban-presidency/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/page.tsx
__turbopack_context__.s([
    "default",
    ()=>PresidentialOffice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/szaban/frontend/szaban-presidency/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/szaban/frontend/szaban-presidency/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$components$2f$PresidentialDashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/szaban/frontend/szaban-presidency/components/PresidentialDashboard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$components$2f$EconomicWarfare$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/szaban/frontend/szaban-presidency/components/EconomicWarfare.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$components$2f$DiplomaticRelations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/szaban/frontend/szaban-presidency/components/DiplomaticRelations.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$components$2f$MilitaryStrategy$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/szaban/frontend/szaban-presidency/components/MilitaryStrategy.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$components$2f$InternalAffairs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/szaban/frontend/szaban-presidency/components/InternalAffairs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$components$2f$EnhancedIntelligence$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/szaban/frontend/szaban-presidency/components/EnhancedIntelligence.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$components$2f$CrisisManagement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/szaban/frontend/szaban-presidency/components/CrisisManagement.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function PresidentialOffice() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('dashboard');
    const [countries, setCountries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [szabanData, setSzabanData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PresidentialOffice.useEffect": ()=>{
            // eslint-disable-next-line react-hooks/immutability
            fetchGameState();
            const interval = setInterval(fetchGameState, 10000);
            return ({
                "PresidentialOffice.useEffect": ()=>clearInterval(interval)
            })["PresidentialOffice.useEffect"];
        }
    }["PresidentialOffice.useEffect"], []);
    const fetchGameState = async ()=>{
        try {
            const response = await fetch('http://localhost:8000/game-state');
            const data = await response.json();
            const safeCountries = data.countries || [];
            const countriesWithDefaults = safeCountries.map((country)=>({
                    id: country.id || `temp-${Math.random()}`,
                    name: country.name || 'Unknown',
                    gdp: country.gdp || 0,
                    gdp_growth_rate: country.gdp_growth_rate || 2.0,
                    military_strength: country.military_strength || 50,
                    nuclear_arsenal: country.nuclear_arsenal || 0,
                    technology_level: country.technology_level || 60,
                    resources: country.resources || {
                        oil: 100,
                        uranium: 50,
                        food: 200
                    },
                    public_opinion: country.public_opinion || 70,
                    stability: country.stability || 75,
                    alliances: country.alliances || []
                }));
            setCountries(countriesWithDefaults);
            const szaban = countriesWithDefaults.find((c)=>c.name === 'SZABAN');
            setSzabanData(szaban);
        } catch (error) {
            console.error('Error fetching game state:', error);
            setCountries([]);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-black/80 border-b border-yellow-500/30 backdrop-blur-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-6 py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col lg:flex-row lg:items-center lg:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl lg:text-3xl font-bold text-yellow-400 mb-4 lg:mb-0",
                                children: "🇸🇿 Office of the President - Republic of SZABAN"
                            }, void 0, false, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this),
                            szabanData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-yellow-500/10 border border-yellow-500/30 rounded-lg px-4 py-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-yellow-300",
                                                children: "GDP Rank"
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                                                lineNumber: 86,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-lg font-bold text-white",
                                                children: [
                                                    "#",
                                                    countries.sort((a, b)=>b.gdp - a.gdp).findIndex((c)=>c.name === 'SZABAN') + 1
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                                                lineNumber: 87,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                                        lineNumber: 85,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-red-300",
                                                children: "Military Power"
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                                                lineNumber: 92,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-lg font-bold text-white",
                                                children: szabanData.military_strength
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                                                lineNumber: 93,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                                        lineNumber: 91,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-orange-500/10 border border-orange-500/30 rounded-lg px-4 py-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-orange-300",
                                                children: "Nuclear Arsenal"
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                                                lineNumber: 96,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-lg font-bold text-white",
                                                children: szabanData.nuclear_arsenal
                                            }, void 0, false, {
                                                fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                                                lineNumber: 97,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                                        lineNumber: 95,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                                lineNumber: 84,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "bg-black/60 border-b border-gray-700 backdrop-blur-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex overflow-x-auto space-x-1 py-2",
                        children: [
                            {
                                key: 'dashboard',
                                label: '🏛️ Dashboard',
                                emoji: '🏛️'
                            },
                            {
                                key: 'economic',
                                label: '💰 Economic',
                                emoji: '💰'
                            },
                            {
                                key: 'military',
                                label: '⚔️ Military',
                                emoji: '⚔️'
                            },
                            {
                                key: 'diplomacy',
                                label: '🤝 Diplomacy',
                                emoji: '🤝'
                            },
                            {
                                key: 'internal',
                                label: '🏛️ Internal',
                                emoji: '🏛️'
                            },
                            {
                                key: 'crisis',
                                label: '🚨 Crisis',
                                emoji: '🚨'
                            },
                            {
                                key: 'intelligence',
                                label: '🕵️ Intelligence',
                                emoji: '🕵️'
                            }
                        ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `flex items-center space-x-2 px-4 py-3 rounded-lg font-semibold transition-all duration-200 whitespace-nowrap ${activeTab === tab.key ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/25' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`,
                                onClick: ()=>setActiveTab(tab.key),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg",
                                        children: tab.emoji
                                    }, void 0, false, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                                        lineNumber: 127,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: tab.label
                                    }, void 0, false, {
                                        fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                                        lineNumber: 128,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, tab.key, true, {
                                fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                                lineNumber: 118,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "container mx-auto px-6 py-8",
                children: [
                    activeTab === 'dashboard' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$components$2f$PresidentialDashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        countries: countries
                    }, void 0, false, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                        lineNumber: 137,
                        columnNumber: 39
                    }, this),
                    activeTab === 'economic' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$components$2f$EconomicWarfare$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        countries: countries
                    }, void 0, false, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                        lineNumber: 138,
                        columnNumber: 38
                    }, this),
                    activeTab === 'military' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$components$2f$MilitaryStrategy$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        countries: countries
                    }, void 0, false, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                        lineNumber: 139,
                        columnNumber: 38
                    }, this),
                    activeTab === 'diplomacy' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$components$2f$DiplomaticRelations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        countries: countries
                    }, void 0, false, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                        lineNumber: 140,
                        columnNumber: 39
                    }, this),
                    activeTab === 'internal' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$components$2f$InternalAffairs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        countries: countries
                    }, void 0, false, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                        lineNumber: 141,
                        columnNumber: 38
                    }, this),
                    activeTab === 'crisis' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$components$2f$CrisisManagement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                        lineNumber: 142,
                        columnNumber: 36
                    }, this),
                    activeTab === 'intelligence' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$components$2f$EnhancedIntelligence$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        countries: countries
                    }, void 0, false, {
                        fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                        lineNumber: 143,
                        columnNumber: 42
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "bg-black/80 border-t border-gray-700 py-4 mt-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-6 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 text-sm",
                            children: "🔒 Classified - For Presidential Eyes Only"
                        }, void 0, false, {
                            fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500 text-xs mt-1",
                            children: [
                                "Secure Terminal Active | Last Updated: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$szaban$2f$frontend$2f$szaban$2d$presidency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    suppressHydrationWarning: true,
                                    children: new Date().toLocaleTimeString()
                                }, void 0, false, {
                                    fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                                    lineNumber: 151,
                                    columnNumber: 52
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/szaban/frontend/szaban-presidency/app/page.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
_s(PresidentialOffice, "AIsHyeSdtLURPECIOBYJBSUad5U=");
_c = PresidentialOffice;
var _c;
__turbopack_context__.k.register(_c, "PresidentialOffice");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=szaban_frontend_szaban-presidency_f37e37e6._.js.map