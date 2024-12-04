export interface Message {
  id: string
  text: string
  timestamp: string
  contactPhone: string
  directionType: 'MT' | 'MO' // MT = Message To (outgoing), MO = Message Origin (incoming)
  contactName?: string
  status?: 'sent' | 'delivered' | 'failed'
}
