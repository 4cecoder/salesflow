# SaleFlow API Endpoints

## Authentication & Authorization
- `POST /api/v1/auth/register` - Company registration
- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/refresh` - Refresh access token
- `POST /api/v1/auth/logout` - User logout
- `POST /api/v1/auth/reset-password` - Password reset
- `GET /api/v1/auth/verify/{token}` - Email verification

## Company Management (Multi-tenant)
- `GET /api/v1/company` - Get company profile
- `PUT /api/v1/company` - Update company settings
- `POST /api/v1/company/branding` - Update company branding
- `GET /api/v1/company/usage` - Get platform usage metrics
- `POST /api/v1/company/invite` - Invite team members

## User Management
- `GET /api/v1/users` - List company users
- `POST /api/v1/users` - Create new user
- `GET /api/v1/users/{id}` - Get user details
- `PUT /api/v1/users/{id}` - Update user
- `DELETE /api/v1/users/{id}` - Delete user
- `PUT /api/v1/users/{id}/role` - Update user role

## Video Conferencing
- `POST /api/v1/meetings` - Create meeting
- `GET /api/v1/meetings/{id}` - Get meeting details
- `PUT /api/v1/meetings/{id}` - Update meeting
- `DELETE /api/v1/meetings/{id}` - Cancel meeting
- `POST /api/v1/meetings/{id}/join` - Join meeting
- `POST /api/v1/meetings/{id}/leave` - Leave meeting
- `GET /api/v1/meetings/{id}/recording` - Get meeting recording
- `POST /api/v1/meetings/schedule` - Schedule future meeting

## Real-time Communication
- `WebSocket /ws/meeting/{id}` - Meeting WebSocket connection
- `WebSocket /ws/notifications` - Real-time notifications
- `WebSocket /ws/chat/{roomId}` - Chat room connection

## Chat System
- `GET /api/v1/chat/rooms` - List all chat rooms
- `POST /api/v1/chat/rooms` - Create new chat room
- `GET /api/v1/chat/rooms/{id}` - Get chat room details
- `PUT /api/v1/chat/rooms/{id}` - Update chat room
- `DELETE /api/v1/chat/rooms/{id}` - Delete chat room
- `GET /api/v1/chat/rooms/{id}/messages` - Get chat history
- `POST /api/v1/chat/rooms/{id}/messages` - Send new message
- `DELETE /api/v1/chat/messages/{id}` - Delete message
- `PUT /api/v1/chat/messages/{id}` - Edit message
- `POST /api/v1/chat/rooms/{id}/typing` - Send typing indicator
- `GET /api/v1/chat/rooms/{id}/participants` - List room participants
- `POST /api/v1/chat/rooms/{id}/participants` - Add participants
- `DELETE /api/v1/chat/rooms/{id}/participants/{userId}` - Remove participant
- `POST /api/v1/chat/rooms/{id}/files` - Upload file to chat
- `GET /api/v1/chat/search` - Search chat messages

## WebSocket Events
### Chat Events
- `chat.message` - New chat message
- `chat.typing` - User typing indicator
- `chat.read` - Message read receipt
- `chat.participant.join` - Participant joined
- `chat.participant.leave` - Participant left
- `chat.reaction` - Message reaction

### Meeting Events
- `meeting.join` - Participant joined meeting
- `meeting.leave` - Participant left meeting
- `meeting.mute` - Audio/video mute status
- `meeting.screen.share` - Screen sharing status
- `meeting.recording` - Recording status
- `meeting.hand.raise` - Hand raise status
- `meeting.chat` - In-meeting chat message
- `meeting.ai.insight` - Real-time AI insight

### System Events
- `system.notification` - System notification
- `system.error` - Error event
- `system.reconnect` - Connection status

## WebRTC Video Calls

### Signaling Server WebSocket
- `WebSocket /ws/signaling/{roomId}` - WebRTC signaling connection

### Signaling Events
- `signal.offer` - Send/Receive SDP offer
- `signal.answer` - Send/Receive SDP answer
- `signal.ice` - Send/Receive ICE candidates
- `signal.negotiate` - Renegotiation request
- `signal.restart` - ICE restart request

### Video Call Management
- `POST /api/v1/video/rooms` - Create video room
- `GET /api/v1/video/rooms/{id}` - Get room details
- `DELETE /api/v1/video/rooms/{id}` - End video room
- `POST /api/v1/video/rooms/{id}/join` - Join video room
- `POST /api/v1/video/rooms/{id}/leave` - Leave video room
- `GET /api/v1/video/rooms/{id}/participants` - Get participants
- `POST /api/v1/video/rooms/{id}/recording/start` - Start recording
- `POST /api/v1/video/rooms/{id}/recording/stop` - Stop recording

### Media Control
- `POST /api/v1/video/rooms/{id}/mute-audio` - Mute audio
- `POST /api/v1/video/rooms/{id}/unmute-audio` - Unmute audio
- `POST /api/v1/video/rooms/{id}/mute-video` - Mute video
- `POST /api/v1/video/rooms/{id}/unmute-video` - Unmute video
- `POST /api/v1/video/rooms/{id}/screen-share/start` - Start screen sharing
- `POST /api/v1/video/rooms/{id}/screen-share/stop` - Stop screen sharing

### Video Events (WebSocket)
- `video.participant.join` - New participant joined
- `video.participant.leave` - Participant left
- `video.track.added` - New media track added
- `video.track.removed` - Media track removed
- `video.mute` - Participant muted audio/video
- `video.unmute` - Participant unmuted audio/video
- `video.quality` - Connection quality update
- `video.screen.share` - Screen sharing status change
- `video.recording` - Recording status change
- `video.error` - Video-related error

### Video Quality Management
- `GET /api/v1/video/rooms/{id}/stats` - Get room quality statistics
- `GET /api/v1/video/rooms/{id}/health` - Get connection health metrics
- `PUT /api/v1/video/rooms/{id}/quality` - Adjust video quality settings
- `POST /api/v1/video/rooms/{id}/reconnect` - Force connection restart

### STUN/TURN Configuration
- `GET /api/v1/video/ice-servers` - Get STUN/TURN server configuration
- `GET /api/v1/video/regions` - List available server regions
- `PUT /api/v1/video/preferred-region` - Update preferred server region

### Analytics & Monitoring
- `GET /api/v1/analytics/meetings/quality` - Get meeting quality metrics
- `GET /api/v1/analytics/meetings/usage` - Get meeting usage statistics
- `GET /api/v1/analytics/network/health` - Get network health metrics
- `POST /api/v1/analytics/report-issue` - Report connection or quality issues

### Additional WebSocket Events
- `video.quality` - Video quality status updates
- `video.reconnecting` - Connection recovery status
- `video.region.change` - Server region change notification
- `video.bandwidth` - Bandwidth status updates

## Calendar & Events
- `GET /api/v1/calendar/events` - List calendar events with pagination
  - Query params: `start`, `end`, `view`, `page`, `limit`
- `POST /api/v1/calendar/events` - Create new calendar event
- `GET /api/v1/calendar/events/{id}` - Get event details
- `PUT /api/v1/calendar/events/{id}` - Update event
- `DELETE /api/v1/calendar/events/{id}` - Delete event
- `GET /api/v1/calendar/events/upcoming` - Get upcoming events
- `GET /api/v1/calendar/events/today` - Get today's events

### Event Categories & Types
- `GET /api/v1/calendar/categories` - List event categories
- `POST /api/v1/calendar/categories` - Create event category
- `PUT /api/v1/calendar/categories/{id}` - Update category
- `DELETE /api/v1/calendar/categories/{id}` - Delete category

### Event Scheduling
- `POST /api/v1/calendar/events/{id}/reschedule` - Reschedule event
- `POST /api/v1/calendar/events/{id}/cancel` - Cancel event
- `GET /api/v1/calendar/availability` - Get user availability slots
- `POST /api/v1/calendar/events/{id}/invite` - Send event invitation
- `PUT /api/v1/calendar/events/{id}/response` - Respond to event invitation
- `GET /api/v1/calendar/events/{id}/attendees` - List event attendees

### Calendar Integration
- `GET /api/v1/calendar/integrations` - List available calendar integrations
- `POST /api/v1/calendar/integrations/{provider}` - Connect calendar integration
- `DELETE /api/v1/calendar/integrations/{provider}` - Disconnect calendar integration
- `GET /api/v1/calendar/sync-status` - Get calendar sync status

## Dashboard Overview
- `GET /api/v1/dashboard/metrics` - Get dashboard overview metrics
- `GET /api/v1/dashboard/activity` - Get recent activity timeline
- `GET /api/v1/dashboard/quick-actions` - Get available quick actions
- `GET /api/v1/dashboard/analytics` - Get detailed analytics data

## Deals Management
- `GET /api/v1/deals` - List all deals with pagination and filters
  - Query params: `search`, `stage`, `value`, `page`, `limit`
- `POST /api/v1/deals` - Create new deal
- `GET /api/v1/deals/{id}` - Get deal details
- `PUT /api/v1/deals/{id}` - Update deal
- `DELETE /api/v1/deals/{id}` - Delete deal
- `GET /api/v1/deals/stages` - Get all deal stages
- `GET /api/v1/deals/metrics` - Get deal metrics and statistics
- `GET /api/v1/deals/recent` - Get recent deals
- `GET /api/v1/deals/pipeline` - Get pipeline visualization data

## Sales Analytics
- `GET /api/v1/analytics/overview` - Get sales overview metrics
- `GET /api/v1/analytics/pipeline` - Get pipeline analytics
- `GET /api/v1/analytics/revenue` - Get revenue metrics
- `GET /api/v1/analytics/deals` - Get deals analytics
- `GET /api/v1/analytics/performance` - Get team performance metrics
- `GET /api/v1/analytics/trends` - Get sales trends data
- `GET /api/v1/analytics/forecasts` - Get sales forecasts

## Customer Management
- `GET /api/v1/customers` - List all customers with pagination and filters
- `POST /api/v1/customers` - Create new customer
- `GET /api/v1/customers/{id}` - Get customer details
- `PUT /api/v1/customers/{id}` - Update customer information
- `DELETE /api/v1/customers/{id}` - Archive/Delete customer
- `GET /api/v1/customers/search` - Search customers by name, email, or custom fields
- `POST /api/v1/customers/import` - Bulk import customers from CSV/Excel
- `GET /api/v1/customers/export` - Export customers to CSV/Excel

### Customer Details
- `GET /api/v1/customers/{id}/activity` - Get customer activity history
- `GET /api/v1/customers/{id}/meetings` - List customer meetings
- `GET /api/v1/customers/{id}/notes` - Get customer notes
- `POST /api/v1/customers/{id}/notes` - Add customer note
- `GET /api/v1/customers/{id}/documents` - List customer documents
- `POST /api/v1/customers/{id}/documents` - Upload customer document
- `GET /api/v1/customers/{id}/deals` - List customer deals

### Customer Tags & Categories
- `GET /api/v1/customer-tags` - List all customer tags
- `POST /api/v1/customer-tags` - Create new tag
- `PUT /api/v1/customers/{id}/tags` - Update customer tags
- `GET /api/v1/customer-segments` - List customer segments
- `POST /api/v1/customer-segments` - Create customer segment
- `PUT /api/v1/customer-segments/{id}` - Update segment criteria

### Custom Fields
- `GET /api/v1/customer-fields` - List custom fields
- `POST /api/v1/customer-fields` - Create custom field
- `PUT /api/v1/customer-fields/{id}` - Update custom field
- `DELETE /api/v1/customer-fields/{id}` - Delete custom field

## Sales Pipeline
- `GET /api/v1/pipeline` - Get sales pipeline
- `POST /api/v1/pipeline/stages` - Create pipeline stage
- `PUT /api/v1/pipeline/stages/{id}` - Update pipeline stage
- `DELETE /api/v1/pipeline/stages/{id}` - Delete pipeline stage
- `POST /api/v1/pipeline/deals` - Create new deal
- `PUT /api/v1/pipeline/deals/{id}` - Update deal
- `DELETE /api/v1/pipeline/deals/{id}` - Delete deal

## Contacts & Leads
- `GET /api/v1/contacts` - List contacts
- `POST /api/v1/contacts` - Create contact
- `GET /api/v1/contacts/{id}` - Get contact details
- `PUT /api/v1/contacts/{id}` - Update contact
- `DELETE /api/v1/contacts/{id}` - Delete contact
- `GET /api/v1/contacts/{id}/history` - Get contact interaction history

## Contact Management
- `GET /api/v1/contacts` - List contacts with pagination and filters
  - Query params: `search`, `tags`, `status`, `page`, `limit`
- `POST /api/v1/contacts` - Create new contact
- `GET /api/v1/contacts/{id}` - Get contact details
- `PUT /api/v1/contacts/{id}` - Update contact
- `DELETE /api/v1/contacts/{id}` - Archive/Delete contact
- `GET /api/v1/contacts/tags` - List all contact tags
- `POST /api/v1/contacts/{id}/tags` - Add tags to contact
- `DELETE /api/v1/contacts/{id}/tags/{tagId}` - Remove tag from contact

### Contact Interactions
- `GET /api/v1/contacts/{id}/interactions` - List contact interactions
- `POST /api/v1/contacts/{id}/interactions` - Add new interaction
- `PUT /api/v1/contacts/{id}/interactions/{interactionId}` - Update interaction
- `DELETE /api/v1/contacts/{id}/interactions/{interactionId}` - Delete interaction
- `GET /api/v1/contacts/{id}/interactions/types` - Get available interaction types
- `POST /api/v1/contacts/{id}/follow-up` - Schedule follow-up
- `GET /api/v1/contacts/{id}/timeline` - Get contact timeline

### Contact Custom Fields
- `GET /api/v1/contacts/fields` - List custom fields
- `POST /api/v1/contacts/fields` - Create custom field
- `PUT /api/v1/contacts/fields/{id}` - Update custom field
- `DELETE /api/v1/contacts/fields/{id}` - Delete custom field

## Task Management
- `GET /api/v1/tasks` - List tasks with pagination and filters
  - Query params: `search`, `status`, `priority`, `page`, `limit`
- `POST /api/v1/tasks` - Create new task
- `GET /api/v1/tasks/{id}` - Get task details
- `PUT /api/v1/tasks/{id}` - Update task
- `DELETE /api/v1/tasks/{id}` - Delete task
- `PUT /api/v1/tasks/{id}/status` - Update task status
- `PUT /api/v1/tasks/{id}/priority` - Update task priority
- `POST /api/v1/tasks/{id}/assign` - Assign task to user
- `GET /api/v1/tasks/metrics` - Get task metrics
- `GET /api/v1/tasks/upcoming` - Get upcoming tasks
- `GET /api/v1/tasks/overdue` - Get overdue tasks

### Task Categories & Labels
- `GET /api/v1/tasks/categories` - List task categories
- `POST /api/v1/tasks/categories` - Create task category
- `PUT /api/v1/tasks/categories/{id}` - Update category
- `DELETE /api/v1/tasks/categories/{id}` - Delete category
- `GET /api/v1/tasks/labels` - List task labels
- `POST /api/v1/tasks/{id}/labels` - Add labels to task
- `DELETE /api/v1/tasks/{id}/labels/{labelId}` - Remove label from task

## AI Features
- `POST /api/v1/ai/analyze-call` - Analyze call recording
- `POST /api/v1/ai/sentiment` - Real-time sentiment analysis
- `GET /api/v1/ai/insights/{meetingId}` - Get meeting insights
- `POST /api/v1/ai/summary` - Generate meeting summary
- `POST /api/v1/ai/suggestions` - Get sales suggestions

## Analytics
- `GET /api/v1/analytics/overview` - Get analytics overview
- `GET /api/v1/analytics/sales` - Sales performance metrics
- `GET /api/v1/analytics/team` - Team performance metrics
- `GET /api/v1/analytics/meetings` - Meeting analytics
- `GET /api/v1/analytics/conversion` - Conversion metrics
- `GET /api/v1/analytics/export` - Export analytics data

## Integration
- `GET /api/v1/integrations` - List available integrations
- `POST /api/v1/integrations/{service}` - Configure integration
- `DELETE /api/v1/integrations/{service}` - Remove integration
- `GET /api/v1/integrations/{service}/status` - Check integration status

## Settings
- `GET /api/v1/settings` - Get settings
- `PUT /api/v1/settings` - Update settings
- `GET /api/v1/settings/notifications` - Get notification settings
- `PUT /api/v1/settings/notifications` - Update notification preferences

## Files & Media
- `POST /api/v1/files/upload` - Upload file
- `GET /api/v1/files/{id}` - Get file
- `DELETE /api/v1/files/{id}` - Delete file
- `GET /api/v1/files/meeting/{meetingId}` - Get meeting files

## Deal Management
- `GET /api/v1/deals` - List all deals with filters
- `POST /api/v1/deals` - Create new deal
- `GET /api/v1/deals/{id}` - Get deal details
- `PUT /api/v1/deals/{id}` - Update deal
- `DELETE /api/v1/deals/{id}` - Archive/Delete deal
- `GET /api/v1/deals/search` - Search deals
- `PUT /api/v1/deals/{id}/stage` - Update deal stage
- `GET /api/v1/deals/{id}/timeline` - Get deal timeline

### Deal Communication
- `GET /api/v1/deals/{id}/communications` - List deal communications
- `POST /api/v1/deals/{id}/email` - Send email
- `POST /api/v1/deals/{id}/sms` - Send SMS
- `GET /api/v1/deals/{id}/templates` - Get communication templates
- `POST /api/v1/deals/{id}/schedule-followup` - Schedule follow-up
- `GET /api/v1/deals/scheduled-communications` - List scheduled communications

### Communication Automation
- `GET /api/v1/automation/workflows` - List automation workflows
- `POST /api/v1/automation/workflows` - Create workflow
- `PUT /api/v1/automation/workflows/{id}` - Update workflow
- `GET /api/v1/automation/triggers` - List automation triggers
- `POST /api/v1/automation/triggers` - Create trigger
- `GET /api/v1/automation/templates` - List message templates
- `POST /api/v1/automation/templates` - Create template

### Meeting Reminders
- `GET /api/v1/reminders` - List all reminders
- `POST /api/v1/reminders` - Create reminder
- `PUT /api/v1/reminders/{id}` - Update reminder
- `DELETE /api/v1/reminders/{id}` - Delete reminder
- `GET /api/v1/reminders/settings` - Get reminder settings
- `PUT /api/v1/reminders/settings` - Update reminder settings

## Drop-in System
- `GET /api/v1/dropin/availability` - Get available drop-in slots
- `POST /api/v1/dropin/sessions` - Create drop-in session
- `GET /api/v1/dropin/sessions/active` - List active sessions
- `POST /api/v1/dropin/sessions/{id}/join` - Join drop-in session
- `POST /api/v1/dropin/sessions/{id}/leave` - Leave drop-in session
- `GET /api/v1/dropin/queue` - Get queue status
- `POST /api/v1/dropin/queue/{id}/position` - Update queue position

### Drop-in Configuration
- `GET /api/v1/dropin/settings` - Get drop-in settings
- `PUT /api/v1/dropin/settings` - Update drop-in settings
- `GET /api/v1/dropin/hours` - Get business hours
- `PUT /api/v1/dropin/hours` - Update business hours
- `GET /api/v1/dropin/capacity` - Get capacity settings
- `PUT /api/v1/dropin/capacity` - Update capacity settings

### Drop-in Analytics
- `GET /api/v1/dropin/analytics/usage` - Get usage statistics
- `GET /api/v1/dropin/analytics/wait-times` - Get wait time metrics
- `GET /api/v1/dropin/analytics/peak-hours` - Get peak hours data
- `GET /api/v1/dropin/analytics/satisfaction` - Get satisfaction metrics

## Communication Services

### Email Management
- `POST /api/v1/email/send` - Send single email
- `POST /api/v1/email/bulk` - Send bulk emails
- `GET /api/v1/email/history` - Get email history
- `GET /api/v1/email/{id}/status` - Get email delivery status
- `GET /api/v1/email/analytics` - Get email analytics
- `POST /api/v1/email/verify` - Verify email address
- `GET /api/v1/email/bounces` - List bounced emails
- `GET /api/v1/email/complaints` - List spam complaints

### Email Templates
- `GET /api/v1/email/templates` - List email templates
- `POST /api/v1/email/templates` - Create email template
- `GET /api/v1/email/templates/{id}` - Get template details
- `PUT /api/v1/email/templates/{id}` - Update template
- `DELETE /api/v1/email/templates/{id}` - Delete template
- `POST /api/v1/email/templates/{id}/test` - Send test email
- `GET /api/v1/email/templates/categories` - List template categories
- `POST /api/v1/email/templates/import` - Import templates

### SMS Management
- `POST /api/v1/sms/send` - Send single SMS
- `POST /api/v1/sms/bulk` - Send bulk SMS
- `GET /api/v1/sms/history` - Get SMS history
- `GET /api/v1/sms/{id}/status` - Get SMS delivery status
- `GET /api/v1/sms/analytics` - Get SMS analytics
- `POST /api/v1/sms/verify` - Verify phone number
- `GET /api/v1/sms/opt-outs` - List opt-out numbers
- `POST /api/v1/sms/opt-in` - Process opt-in request

### SMS Templates
- `GET /api/v1/sms/templates` - List SMS templates
- `POST /api/v1/sms/templates` - Create SMS template
- `GET /api/v1/sms/templates/{id}` - Get template details
- `PUT /api/v1/sms/templates/{id}` - Update template
- `DELETE /api/v1/sms/templates/{id}` - Delete template
- `POST /api/v1/sms/templates/{id}/test` - Send test SMS

### Communication Settings
- `GET /api/v1/communications/settings` - Get communication settings
- `PUT /api/v1/communications/settings` - Update settings
- `GET /api/v1/communications/providers` - List service providers
- `PUT /api/v1/communications/providers/{id}` - Update provider settings
- `GET /api/v1/communications/quotas` - Get sending quotas
- `GET /api/v1/communications/blacklist` - Get blacklisted contacts
- `POST /api/v1/communications/blacklist` - Add to blacklist
- `DELETE /api/v1/communications/blacklist/{id}` - Remove from blacklist

### Communication Analytics
- `GET /api/v1/communications/analytics/overview` - Get overview metrics
- `GET /api/v1/communications/analytics/engagement` - Get engagement metrics
- `GET /api/v1/communications/analytics/deliverability` - Get deliverability stats
- `GET /api/v1/communications/analytics/campaigns` - Get campaign performance
- `GET /api/v1/communications/analytics/costs` - Get cost analysis
- `GET /api/v1/communications/analytics/export` - Export analytics data

## WhatsApp Integration

#### WhatsApp Business API
- `POST /api/v1/whatsapp/send` - Send WhatsApp message
- `POST /api/v1/whatsapp/bulk` - Send bulk messages
- `GET /api/v1/whatsapp/history` - Get message history
- `GET /api/v1/whatsapp/{id}/status` - Get message status
- `GET /api/v1/whatsapp/analytics` - Get messaging analytics
- `POST /api/v1/whatsapp/verify` - Verify WhatsApp business account
- `GET /api/v1/whatsapp/contacts` - List verified contacts
- `POST /api/v1/whatsapp/opt-in` - Process opt-in request

#### WhatsApp Templates
- `GET /api/v1/whatsapp/templates` - List message templates
- `POST /api/v1/whatsapp/templates` - Create template
- `GET /api/v1/whatsapp/templates/{id}` - Get template details
- `PUT /api/v1/whatsapp/templates/{id}` - Update template
- `DELETE /api/v1/whatsapp/templates/{id}` - Delete template
- `POST /api/v1/whatsapp/templates/{id}/submit` - Submit template for approval
- `GET /api/v1/whatsapp/templates/{id}/status` - Check template approval status
- `POST /api/v1/whatsapp/templates/{id}/test` - Send test message

#### Interactive Messages
- `POST /api/v1/whatsapp/interactive/buttons` - Send button message
- `POST /api/v1/whatsapp/interactive/list` - Send list message
- `POST /api/v1/whatsapp/interactive/product` - Send product message
- `POST /api/v1/whatsapp/interactive/location` - Send location request
- `GET /api/v1/whatsapp/interactive/responses` - Get button/list responses

#### Media Messages
- `POST /api/v1/whatsapp/media/image` - Send image message
- `POST /api/v1/whatsapp/media/video` - Send video message
- `POST /api/v1/whatsapp/media/document` - Send document
- `POST /api/v1/whatsapp/media/audio` - Send audio message
- `GET /api/v1/whatsapp/media/{id}` - Get media message details

#### Business Profile
- `GET /api/v1/whatsapp/profile` - Get business profile
- `PUT /api/v1/whatsapp/profile` - Update business profile
- `GET /api/v1/whatsapp/profile/settings` - Get profile settings
- `PUT /api/v1/whatsapp/profile/settings` - Update profile settings
- `POST /api/v1/whatsapp/profile/photo` - Update profile photo

#### Webhooks
- `POST /api/v1/whatsapp/webhooks` - Register webhook endpoint
- `GET /api/v1/whatsapp/webhooks` - List registered webhooks
- `PUT /api/v1/whatsapp/webhooks/{id}` - Update webhook
- `DELETE /api/v1/whatsapp/webhooks/{id}` - Delete webhook
- `POST /api/v1/whatsapp/webhooks/{id}/test` - Test webhook

#### Analytics & Reporting
- `GET /api/v1/whatsapp/analytics/messages` - Get messaging metrics
- `GET /api/v1/whatsapp/analytics/templates` - Get template performance
- `GET /api/v1/whatsapp/analytics/engagement` - Get engagement metrics
- `GET /api/v1/whatsapp/analytics/quality` - Get quality metrics
- `GET /api/v1/whatsapp/analytics/export` - Export analytics data
