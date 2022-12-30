export default handler = async (req, res) => {
    const email = req.body.email

    await fetch(`https://${process.env.MAILCHIMP_API_SERVER}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_AUDIENCE_ID}/members`, {
        body: JSON.stringify({
            email_address: email,
            status: 'subscribed',
        }),
        headers: {
            Authorization: `apikey ${process.env.MAILCHIMP_API_KEY}`,
            'Content-Type': 'application/json',
        },
        method: 'POST',
        }
    )

    res.status(200).json({ 'Status': 'Success' })
}