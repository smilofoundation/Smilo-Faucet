const config = require('@/config')

module.exports = {
  getRootMessage (_, res) {
    let apiRootMessage = 'This faucet doesn\'t drip :('

    if (config.FAUCET_DRIPS_SMILO) {
      apiRootMessage = 'This faucet drips Smilo' + (config.FAUCET_DRIPS_ERC20 ? ` and ${config.ERC20_NAME.toUpperCase()}.` : '.')
    } else if (config.FAUCET_DRIPS_ERC20) {
      apiRootMessage = `This faucet drips ${config.ERC20_NAME.toUpperCase()}.`
    }

    return res.json({
      message: apiRootMessage
    })
  }
}
