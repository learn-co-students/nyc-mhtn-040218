require_relative "./channel_member"

class Channel
  attr_accessor :channel_name

  ALL = []
  # you can't write ALL = "whatever" later

  def initialize(channel_name)
    @channel_name = channel_name

    ALL << self
  end

  def self.all
    ALL
  end

  def add_member(member)
    ChannelMember.new(member, self)
  end
end
