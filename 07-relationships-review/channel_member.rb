class ChannelMember
  attr_accessor :member, :channel

  ALL = []

  def initialize(member, channel)
    @member = member
    @channel = channel

    ALL << self
  end

  def self.all
    ALL
  end

end
