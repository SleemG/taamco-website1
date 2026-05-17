"use client";

import { useEffect, useState } from 'react';

export default function DebugClient() {
    const [debugInfo, setDebugInfo] = useState({
        robotsTxt: false,
        sitemapXml: false,
        googleAnalytics: false,
        https: false,
        canonicalUrl: '',
        metaTags: [] as string[],
        structured: false,
    });

    useEffect(() => {
        async function checkResources() {
            // Check robots.txt
            try {
                const robotsRes = await fetch('/robots.txt');
                setDebugInfo(prev => ({ ...prev, robotsTxt: robotsRes.ok }));
            } catch (e) {
                if (process.env.NODE_ENV === 'development') {
                    console.error('Error checking robots.txt:', e);
                }
            }

            // Check sitemap.xml
            try {
                const sitemapRes = await fetch('/sitemap.xml');
                setDebugInfo(prev => ({ ...prev, sitemapXml: sitemapRes.ok }));
            } catch (e) {
                if (process.env.NODE_ENV === 'development') {
                    console.error('Error checking sitemap.xml:', e);
                }
            }

            // Check HTTPS
            setDebugInfo(prev => ({ ...prev, https: window.location.protocol === 'https:' }));

            // Check Google Analytics
            const hasGtag = typeof (window as unknown as { gtag?: unknown }).gtag === 'function';
            setDebugInfo(prev => ({ ...prev, googleAnalytics: hasGtag }));

            // Check canonical URL
            const canonical = document.querySelector('link[rel="canonical"]');
            setDebugInfo(prev => ({ ...prev, canonicalUrl: canonical?.getAttribute('href') || '' }));

            // Check meta tags
            const metaTags = Array.from(document.querySelectorAll('meta')).map(tag => {
                const name = tag.getAttribute('name') || tag.getAttribute('property');
                const content = tag.getAttribute('content');
                return `${name}: ${content}`;
            });
            setDebugInfo(prev => ({ ...prev, metaTags }));

            // Check structured data
            const structuredData = document.querySelector('script[type="application/ld+json"]');
            setDebugInfo(prev => ({ ...prev, structured: !!structuredData }));
        }

        checkResources();
    }, []);

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-8">SEO Debug Information</h1>

            <div className="space-y-6">
                <section className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4">Critical Files</h2>
                    <ul className="space-y-2">
                        <li className="flex items-center">
                            <span className={`w-4 h-4 rounded-full mr-2 ${debugInfo.robotsTxt ? 'bg-green-500' : 'bg-red-500'}`}></span>
                            robots.txt {debugInfo.robotsTxt ? 'found' : 'not found'}
                        </li>
                        <li className="flex items-center">
                            <span className={`w-4 h-4 rounded-full mr-2 ${debugInfo.sitemapXml ? 'bg-green-500' : 'bg-red-500'}`}></span>
                            sitemap.xml {debugInfo.sitemapXml ? 'found' : 'not found'}
                        </li>
                    </ul>
                </section>

                <section className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4">Security & Analytics</h2>
                    <ul className="space-y-2">
                        <li className="flex items-center">
                            <span className={`w-4 h-4 rounded-full mr-2 ${debugInfo.https ? 'bg-green-500' : 'bg-red-500'}`}></span>
                            HTTPS {debugInfo.https ? 'enabled' : 'not enabled'}
                        </li>
                        <li className="flex items-center">
                            <span className={`w-4 h-4 rounded-full mr-2 ${debugInfo.googleAnalytics ? 'bg-green-500' : 'bg-red-500'}`}></span>
                            Google Analytics {debugInfo.googleAnalytics ? 'detected' : 'not detected'}
                        </li>
                    </ul>
                </section>

                <section className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4">SEO Elements</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold">Canonical URL:</h3>
                            <p className="text-gray-600">{debugInfo.canonicalUrl || 'Not found'}</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Structured Data:</h3>
                            <p className={`text-${debugInfo.structured ? 'green' : 'red'}-600`}>
                                {debugInfo.structured ? 'Present' : 'Missing'}
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Meta Tags:</h3>
                            <ul className="text-sm text-gray-600 space-y-1">
                                {debugInfo.metaTags.map((tag, index) => (
                                    <li key={index}>{tag}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4">Next Steps</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Submit your sitemap to <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Search Console</a></li>
                        <li>Create/verify your <a href="https://business.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Business Profile</a></li>
                        <li>Submit your site to Arabic business directories</li>
                        <li>Encourage customer reviews on Google</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
