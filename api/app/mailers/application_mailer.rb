class ApplicationMailer < ActionMailer::Base # rubocop:disable Layout/EndOfLine
  default from: 'from@example.com'
  layout 'mailer'
end
