import { suite, test } from 'mocha-typescript'
import { expect } from 'chai'
import { LogLevel } from '../../../src/common/logging/logger'

@suite('LogLevel')
class LogLevelUnitTest {
  @test('ERROR -> should log on error level')
  should_log_on_error_level() {
    // Given + When
    let level: LogLevel = new LogLevel(LogLevel.ERROR)

    // Then
    expect(level.debug).to.equal(false)
    expect(level.info).to.equal(false)
    expect(level.warning).to.equal(false)
    expect(level.error).to.equal(true)
  }

  @test('WARNING -> should log on warning level')
  should_log_on_warn_level() {
    // Given + When
    let level: LogLevel = new LogLevel(LogLevel.WARNING)

    // Then
    expect(level.debug).to.equal(false)
    expect(level.info).to.equal(false)
    expect(level.warning).to.equal(true)
    expect(level.error).to.equal(true)
  }

  @test('INFO -> should log on info level')
  should_log_on_info_level() {
    // Given + When
    let level: LogLevel = new LogLevel(LogLevel.INFO)

    // Then
    expect(level.debug).to.equal(false)
    expect(level.info).to.equal(true)
    expect(level.warning).to.equal(true)
    expect(level.error).to.equal(true)
  }

  @test('DEBUG -> should log on debug level')
  should_log_on_debug_level() {
    // Given + When
    let level: LogLevel = new LogLevel(LogLevel.DEBUG)

    // Then
    expect(level.debug).to.equal(true)
    expect(level.info).to.equal(true)
    expect(level.warning).to.equal(true)
    expect(level.error).to.equal(true)
  }
}
