import { Controller } from "@hotwired/stimulus"
import { cable } from "@hotwired/turbo-rails"

export default class extends Controller {
  connect() {
    this.subscribe()
    this.scrollMessage()
  }
  subscribe(){
    const turboCableStreamTag = document.querySelector("turbo-cable-stream-source")
    const signedStreamName = turboCableStreamTag.channel.signed_stream_name
    const channelName = turboCableStreamTag.channel.channel

    const scrollMessage = this.scrollMessage.bind(this)
    this.channel = cable.subscribeTo({
      channel: channelName,
      signed_stream_name: signedStreamName,
      recevied (data){
        setTimeout(scrollMessage, 100)
      }
    })
  }

  clearInput(){
    this.element.reset()
  }

  scrollMessage(){
    const chatContainer = document.getElementById("chat-container")
    if (chatContainer) chatContainer.scrollTop = chatContainer.scrollHeight
  }
}
