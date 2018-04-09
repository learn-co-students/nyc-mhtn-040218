require_relative "./channel"
require_relative "./member"
require_relative "./channel_member"
require "pry"

# CHANNELS:
# flatiron-developers
developers = Channel.new("#flatiron-developers")
# all-about-code
abc = Channel.new("#all-about-code")
# nyc-mhtn-web-040218
cohort = Channel.new("#nyc-mhtn-web-040218")

# MEMBERS:
# rishi
rishi = Member.new("Rishi")
# mike
mike = Member.new("Mike")
# jesse
jesse = Member.new("Jesse")
# ian
ian = Member.new("Ian")
# lane
lane = Member.new("Lane")
# brie
brie = Member.new("Brie")
# austin
austin = Member.new("Austin")
# billy
billy = Member.new("Billy")

# RELATIONSHIPS/CHANNELMEMBERS:
# rishi -> flatiron-developers
developers.add_member(rishi)
# rishi -> nyc-mhtn-web-040218
cohort.add_member(rishi)
# mike -> nyc-mhtn-web-040218
cohort.add_member(mike)
# mike -> flatiron-developers
developers.add_member(mike)
# jesse -> nyc-mhtn-web-040218
cohort.add_member(jesse)
# jesse -> all-about-code
abc.add_member(jesse)
# jesse -> flatiron-developers
developers.add_member(jesse)
# ian -> nyc-mhtn-web-040218
cohort.add_member(ian)
# lane -> nyc-mhtn-web-040218
cohort.add_member(lane)
# lane -> flatiron-developers
developers.add_member(lane)
# brie -> nyc-mhtn-web-040218
cohort.add_member(brie)
# brie -> all-about-code
abc.add_member(brie)
# austin -> all-about-code
abc.add_member(austin)
# billy -> nyc-mhtn-web-040218
cohort.add_member(billy)

Pry.start
