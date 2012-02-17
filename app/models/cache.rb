
class Cache

  def initialize
  end

  def self.store key, data, expiration
    if REDIS.get key
      puts "---------------------------------------------------"
      puts "OLD CACHE "+key
      puts "+++++++++++++++++++++++++++++++++++++++++++++++++++"
      return JSON.parse(REDIS.get(key))
    else
      puts "---------------------------------------------------"
      puts "NEW CACHE "+key
      puts "+++++++++++++++++++++++++++++++++++++++++++++++++++"
      REDIS.set key, data.to_json
      REDIS.expire key, expiration
      return JSON.parse(REDIS.get(key))
    end
  end

end