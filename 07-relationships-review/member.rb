require_relative "./channel_member"

class Member
  attr_accessor :username

  ALL = []

  def initialize(username)
    @username = username

    ALL << self
  end

  def self.all
    ALL
  end


  def channel_members
    ChannelMember.all.select do |cm|
      cm.member == self
    end
  end

  def channels
    channel_members.map do |cm|
      cm.channel
    end
  end
end
