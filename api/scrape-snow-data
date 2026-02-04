// api/scrape-snow-data.js
// Vercel serverless function die de scraper runt

import scraper from '../snow-data-scraper.js';

export default async function handler(req, res) {
    // Verify cron secret for security
    const authHeader = req.headers.authorization;
    
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    
    try {
        console.log('🔄 Running snow data scraper via cron...');
        await scraper();
        
        res.status(200).json({ 
            success: true, 
            message: 'Snow data updated successfully',
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error('❌ Scraper error:', error);
        res.status(500).json({ 
            success: false, 
            error: error.message 
        });
    }
}
