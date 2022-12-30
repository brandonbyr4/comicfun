import { ApiClient, ContactsApi, CreateContact } from "sib-api-v3-sdk"

const defaultClient = ApiClient.instance
const apiKey = defaultClient.authentications['api-key']
apiKey.apiKey = process.env.SENDINBLUE_API_KEY

const apiInstanceContacts = new ContactsApi()
const createContact = new CreateContact()

const sendinblueContact = (email, list) => {
    createContact.email = email
    createContact.listIds = [list]

    console.log(process.env.SENDINBLUE_API_KEY)

    apiInstanceContacts.createContact(createContact).then(function(data) {
        return true
    }, function(error) {
        console.error(error)
        return false
    })
}

export default function handler(req, res) {

    const body = req.body
    // try {
    sendinblueContact(body.email, body.list)
    // } catch {
    //     //
    // }

    res.status(200).json({ 'Status': 'Success' })
}