/*
 * @Author: Calvest
 * @Date: 2022-03-21 22:53:32
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-21 22:58:34
 * @FilePath: /training/lodash/test/isArray.test.js
 */
describe("IsArray", () => {
    it("预期 isArray() 判断是否为数组会返回 []", () => {
        expect(isArray()).toEqual([]);
    })

    it("预期 isArray(123) 判断是否为数组会报错，因为传入的参数不是数组", () => {
        const isArrayThrow = () => {
            isArray(123);
        }

        expect(isArrayThrow).toThrow();
    })
})