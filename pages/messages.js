// pages/messages.js
import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { useAuth } from '../contexts/AuthContext'
import axios from 'axios'

export default function Messages() {
  const [conversations, setConversations] = useState([])
  const [selectedConversation, setSelectedConversation] = useState(null)
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const { user } = useAuth()

  useEffect(() => {
    fetchConversations()
  }, [])

  useEffect(() => {
    if (selectedConversation) {
      fetchMessages(selectedConversation._id)
    }
  }, [selectedConversation])

  const fetchConversations = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/conversations')
      setConversations(res.data)
    } catch (error) {
      console.error('Error fetching conversations', error)
    }
  }

  const fetchMessages = async (conversationId) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/conversations/${conversationId}/messages`)
      setMessages(res.data)
    } catch (error) {
      console.error('Error fetching messages', error)
    }
  }

  const handleSendMessage = async (e) => {
    e.preventDefault()
    try {
      await axios.post(`http://localhost:5000/api/conversations/${selectedConversation._id}/messages`, {
        content: newMessage
      })
      setNewMessage('')
      fetchMessages(selectedConversation._id)
    } catch (error) {
      console.error('Error sending message', error)
    }
  }

  return (
    <Layout>
      <h1 className="text-2xl mb-4">Messages</h1>
      <div className="flex">
        <div className="w-1/3 border-r">
          <h2 className="text-xl mb-2">Conversations</h2>
          {conversations.map((conv) => (
            <div
              key={conv._id}
              onClick={() => setSelectedConversation(conv)}
              className={`p-2 cursor-pointer ${selectedConversation?._id === conv._id ? 'bg-blue-100' : ''}`}
            >
              {conv.participants.find(p => p._id !== user._id).name}
            </div>
          ))}
        </div>
        <div className="w-2/3 pl-4">
          {selectedConversation ? (
            <>
              <h2 className="text-xl mb-2">
                Chat with {selectedConversation.participants.find(p => p._id !== user._id).name}
              </h2>
              <div className="h-64 overflow-y-auto mb-4 border p-2">
                {messages.map((message) => (
                  <div key={message._id} className={`mb-2 ${message.sender === user._id ? 'text-right' : ''}`}>
                    <span className={`inline-block p-2 rounded ${message.sender === user._id ? 'bg-blue-100' : 'bg-gray-100'}`}>
                      {message.content}
                    </span>
                  </div>
                ))}
              </div>
              <form onSubmit={handleSendMessage}>
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="w-full p-2 border rounded"
                />
                <button type="submit" className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                  Send
                </button>
              </form>
            </>
          ) : (
            <p>Select a conversation to start chatting</p>
          )}
        </div>
      </div>
    </Layout>
  )
}